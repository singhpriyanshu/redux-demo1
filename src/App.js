import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {allnew,changeWish,changeWishs} from './store/Action'

function App(props) {

  return (
    <div>
    <div className="App">
      <p>my name is<br/>{props.newname}</p>
       <button onClick={()=>props.changeName("j")}>click 2 change</button> <br/>
       <button onClick={()=>props.changeWish()}> click 1</button> <br/>
       <button onClick={()=>props.changeWishs()}> click 2</button> </div>
        
         <p style={{paddingLeft:"527px"}}>wish:{props.newwish}</p>
      </div>
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
           changeWish:()=>{dispatch(changeWish())},
           changeWishs:()=>{dispatch(changeWishs())}
                }
                                          }

export default connect(mapStateToProps,mapStateToDispatch)(App);
