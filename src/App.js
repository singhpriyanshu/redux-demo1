import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {allnew,changeWish,changeWishs,color} from './store/Action'

function App(props) {

  return (
    <div>
    <div className="App">
       <button onClick={()=>props.changeName("j")}>click 2 change</button> <br/>
       <button onClick={()=>props.changeWish()}> click 1</button> <br/>
       <button onClick={()=>props.changeWishs()}> click 2</button> 
       <button onClick={()=>props.colord()}>colors</button> </div>
         <p style={{color:"green",paddingLeft:"527px"}}>my name is<br/>{props.newname}</p>
         <p style={{color:"grey",paddingLeft:"527px"}}>wish:{props.newwish}</p>
         <p style={{color:"red",paddingLeft:"527px"}}>colors:{props.colors}</p>
         
      </div>
       );
}
     const mapStateToProps=(state)=>{
        return {
            newname:state.name,
            newwish:state.wish,
            colors:state.color
                 }
                                     }
    const mapStateToDispatch=(dispatch)=>{
          return{
           changeName:(name)=>{dispatch(allnew(name))},
           changeWish:()=>{dispatch(changeWish())},
           changeWishs:()=>{dispatch(changeWishs())},
           colord:()=>{dispatch(color())},
                }
                                          }

export default connect(mapStateToProps,mapStateToDispatch)(App);
