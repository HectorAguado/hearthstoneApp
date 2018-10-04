import * as types from './types'
import * as api from '../../api'

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
export function fetchHeroesList() {
    return (dispatch, getState) => {
        dispatch(setFetching(true))
        api
            .fetchHeroes()
            .then( response => {
                console.log("RESPONSE.DATA en FetchHeroesList => ", response.data)
                dispatch(setList(response.data))
                dispatch(setFetching(false))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log( "Error en FetcHeroesList => ", err)
            })
    }
}