import {API} from "./api";

export const loginAuth = async (userInfo, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await API.post("/auth/login", userInfo)
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.userData,
        })
        
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error,
        })
        
    }
}

export const authRegister = (data) => API.post("/auth/register", data)
