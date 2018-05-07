import * as types from "./ActionTypes"

export const getCategoryDataStart=()=>{

    return {
        type: types.REQUEST_CATEGORY_START,
        loading: true
    }
}

export const getCategoryDataSuccess=(data)=>{
    return {
        type: types.REQUEST_CATEGORY_SUCCESSS,
        loading: false,
        data: data
    }
}

export const getCategoryDataFailure=()=>{
    return{
        type: types.REQUEST_CATEGORY_FAILURE,
        loading: false
    }
}