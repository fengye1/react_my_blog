
import * as types  from "./ActionTypes";

export const changeLoginStatus=(status)=>{
    return {
        type: types.CHANGE_LOGIN_STATUS,
        status: status
    }
}