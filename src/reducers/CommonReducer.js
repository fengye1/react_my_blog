import * as types from "../actions/ActionTypes";

const defaultState = {
    isLogin:false,

}

 const CommonReducer = (state=defaultState, action)=>{
    switch (action.type) {
        case types.CHANGE_LOGIN_STATUS:
            return {...state, login: action.status}
        default:
            return state
    }
}

export default CommonReducer