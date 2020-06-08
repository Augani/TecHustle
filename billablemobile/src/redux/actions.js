export const actionTypes = {
    login: "LOGIN",
    addTime: "ADD_TIME"
}

export const Login = (data)=>{
    return {
        type: actionTypes.login,
        payload: data
    }
}

export const addTime = (data)=>{
    return {
        type: actionTypes.addTime,
        payload: data
    }
}