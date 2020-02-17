const Reducer2=(state=[],action)=>{
 if(action.type==="CHANGE_WISH"){
        return [
            ...state,
           action.payload
        ]
         }
return state;
}
export default Reducer2;