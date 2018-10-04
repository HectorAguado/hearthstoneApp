import * as types from './types'
import PlayerClassArray from '../../constants'
/***** Acciones Puras *****/
// no export porque de momento sólo se accede desde aqui

function setFetching(value) {
    return {
        type: types.CLASSES_SET_FETCHING,
        value: value,
    }
}

export function setList(value) {
    return {
        type: types.CLASSES_UPDATE_LIST,
        value,  // equivale a (value: value) desde ES6
    }
}

export function setItem(value) {
    return {
        type: types.CLASSES_SET_ITEM,
        value,
    }
}

export function fetchPlayerClassesList() {
    return (dispatch, getState) => {
        dispatch(setFetching(true))
        dispatch(setList(PlayerClassArray))
        console.log("PlayerClassArray en FetchHeroesList => ", PlayerClassArray)
        dispatch(setFetching(false))
    }
}
