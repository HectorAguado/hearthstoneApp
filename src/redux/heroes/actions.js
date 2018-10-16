import * as types from './types'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native"

/***** Acciones Puras *****/
// no export porque de momento sólo se accede desde aqui
function setFetching(value) {
    return {
        type: types.HEROES_SET_FETCHING,
        value: value,
    }
}

export function setList(value) {
    return {
        type: types.HEROES_UPDATE_LIST,
        value,  // equivale a (value: value) desde ES6
    }
}

export function setItem(value) {
    return {
        type: types.HEROES_SET_ITEM,
        value,
    }
}

/***** Acciones Asíncronas *****/ 
// Redux Thunk. api la podemos cargar, porqe en app.js usamos thunk.withExtraArgument(api). Ya no es necesario importar api en cada actions.js
// como extra argument se puede mandar una variable o un objeto { api: api, nombre: 'Luis', ...} y acceder con argumento.api ...

export function fetchHeroesList() {
    return(dispatch, getState, api) => {
        
        var customHeroesList = []

        AsyncStorage.getItem('heroes', (error, result) => {
            if (result && !error) {
                const heroesList = JSON.parse(result)
                customHeroesList = _extractCustomHeroes(heroesList)
                console.log("customHeroesList => ", customHeroesList)
                dispatch(setList(heroesList))
            } else {
                dispatch(setFetching(true))
            }
        })
        
        // dispatch(setList([]))
        // dispatch(setFetching(true))
        api
            .fetchHeroes()
            .then((response) => {
                const heroesList = response.data
                Array.prototype.push.apply( heroesList, customHeroesList)
                dispatch(setList(heroesList))
                dispatch(setFetching(false))
                AsyncStorage.setItem('heroes', JSON.stringify(response.data))
            }).catch((error) => {
                dispatch(setFetching(false))
                console.log("FETCH HEROES LIST ERROR: ", error)
            });
    }
}

function _extractCustomHeroes(list){
    const aux = []
    list.forEach(hero => {
        if (hero.isCustom === true) {
            aux.push(hero)
        }
        console.log("Hero => ", hero.isCustom)
    })
    return aux 
}

export function postPlayerClassHero(data){
    return (dispatch, getState, api) => {

        const playerClass = getState().playerClasses.item
        if(!data || !playerClass){
            return
        }

        const heroData = {
            ...data,
            playerClass: playerClass.name,
            type: "Hero",
            isCustom: true,
        }

        const aux = getState().heroes.list
        aux.push(heroData)
        
        AsyncStorage.setItem('heroes', JSON.stringify(aux), err => {
            console.log("Error en postPlayerClassHero => ", err)
        })

        // dispatch(setFetching(true))
        dispatch(fetchHeroesList())
        Actions.pop()

        // dispatch(setList(aux))

    }
}
// export function fetchHeroesList() {
//     return (dispatch, getState, api ) => {
//         const playerClass = getState().playerClasses.item
//         if(!playerClass){ 
//             return
//         }
//         dispatch(setList([]))
//         dispatch(setFetching(true))
//         api
//             .fetchHeroes()
//             .then( response => {
//                 // console.log("RESPONSE.DATA en FetchHeroesList => ", response.data)
//                 const purguedList = _selectPlayerClassItems(response.data, playerClass)
//                 // console.log("PurguedList => ", purguedList)
//                 dispatch(setList(purguedList))
//                 dispatch(setFetching(false))
//             })
//             .catch( err => {
//                 dispatch(setFetching(false))
//                 console.log( "Error en FetcHeroesList => ", err)
//             })
//     }
// }

// function _selectPlayerClassItems(allHeroreslist, playerClass){
//             const aux = []
//             allHeroreslist.forEach(hero => {
//                 if (hero.playerClass === playerClass.name) aux.push(hero)
//             });
//             return aux         
// }

// export function postPlayerClassHero(data){
//     return (dispatch, getState, api) => {

//         const playerClass = getState().playerClasses.item
//         if(!data || !playerClass){
//             return
//         }

//         const heroData = {
//             ...data,
//             playerClass: playerClass.name,
//             type: "Hero",
//         }


//         /***** APAÑO **** 
//          * Como en este API no se pueden hacer POST, he dejado implementado abajo cómo se haría
//          * y he implementado este funcionamiento, para que se guarde el personaje que llega al final
//          * de la lista de heroes.
//          * Lo único, he notado que tarda muchísimo en cargarse las imágenes
//         */
        
//         const aux = getState().heroes.list
//         aux.push(heroData)
        
//         Actions.pop()
//         dispatch(setList(aux))

//     }
//         /**  Esto esta implementado a falta de que exista posibilidad de hacer un POST a la API */
//         /*  
//         dispatch(setFetching(true))

//         const heroData = {
//             ...data,
//             clase: playerClass,
//         }

//         api
//             .postPlayerClassHero(heroData)
//             .then( res => {
//                 dispatch(setFetching(true))
//                 dispatch(fetchHeroesList())
//                 Actions.pop()
//             })
//             .catch( err => {
//                 dispatch(setFetching(false))
//                 console.log( "Error en postPlayerClassHero => ", err)
//             })
//     }

//     */
// }