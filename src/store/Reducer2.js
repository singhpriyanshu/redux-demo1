// const initialState={
//     name:"vivek",
//     work:["developing","writing"]
// }
const Reducer2=(state=[],action)=>{
   
    if (action.type==="CHANGE_WISH"){
   return [
       ...state,
      "BLANK"
   ]
    }
    return state;
}
export default Reducer2;