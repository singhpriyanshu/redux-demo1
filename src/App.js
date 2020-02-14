import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {allnew,changeWish,changeWishs} from './action'

function App(props) {
  console.log(props)
  return (
    <div className="App">
<p>my name is<br/>{props.newname}</p>
<button onClick={()=>props.changeName("j")}>click 2 change</button>
   
<button onClick={()=>props.changeWishs()}>click 4 wishchange</button> </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    newname:state.name,
    newwish:state.wish
  }
}
const mapStateToDispatch=(dispatch)=>{
  return{
    changeName:(name)=>{dispatch(allnew(name))},
    changeWishs:()=>{dispatch(changeWishs())}

  }
}
export default connect(mapStateToProps,mapStateToDispatch)(App);
