/**
 * 分类 reducer
 */

import * as types from '../actions/ActionTypes';


const defaultState = {
    categoryList: [],
    loading:false
}

const CategoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.REQUEST_CATEGORY_START:
            return {
                ...state, loading: action.loading
            }
        case types.REQUEST_CATEGORY_SUCCESSS:
        return {
            ...state, loading: action.loading,  categoryList:action.data,
        }
           
        case types.REQUEST_CATEGORY_FAILURE:
            return {
                ...state, loading: action.loading
            }
        default:
            return state
    }

}

export default CategoryReducer