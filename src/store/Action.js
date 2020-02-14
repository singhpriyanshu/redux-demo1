import * as actionTypes from './ActionTypes'
export const changeWishs =()=>{
    return {
        type:actionTypes.CHANGE_WISH,
        payload:"romn"
    }
}
export const changeWish =()=>{
    return {
        type:actionTypes.CHANGE_WISH,
        payload:"BLANK"
    }
}



export const allnew =(name)=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res2=>{
            dispatch({ type:actionTypes.CHANGE_NAME,
                        payload:res2[2].name})
        })
    }
    }