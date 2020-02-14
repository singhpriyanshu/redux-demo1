export const allnew =(name)=>{
return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res2=>{
        dispatch({ type:"CHANGE_NAME",
                    payload:res2[2].name})
    })
}
}
// export const allnew =(name)=>{
//     return {
//         type:"CHANGE_NAME",
//         payload:name
//     }
//     }

export const changeWish =()=>{
    return {
        type:"CHANGE_WISH",
        payload:"BLANK"
    }
}
export const changeWishs =()=>{
    return {
        type:"CHANGE_WISH",
        payload:"romn"
    }
}