import * as types from './types'
// import * as api from '../../api'

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
    return (dispatch, getState, api ) => {
        const playerClass = getState().playerClasses.item
        if(!playerClass){ 
            return
        }
        dispatch(setList([]))
        dispatch(setFetching(true))
        api
            .fetchHeroes()
            .then( response => {
                // console.log("RESPONSE.DATA en FetchHeroesList => ", response.data)
                const purguedList = _selectPlayerClassItems(response.data, playerClass)
                // console.log("PurguedList => ", purguedList)
                dispatch(setList(purguedList))
                dispatch(setFetching(false))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log( "Error en FetcHeroesList => ", err)
            })
    }
}

function _selectPlayerClassItems(allHeroreslist, playerClass){
            const aux = []
            allHeroreslist.forEach(hero => {
                if (hero.playerClass === playerClass.name) aux.push(hero)
            });
            return aux         
}