const Reducer3=(state=[],action)=>{
  
 
         if (action.type==="COLOR"){
            return [
                ...state,
               action.payload
            ]
             }

    return state;
}
export default Reducer3;