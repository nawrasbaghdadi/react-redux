import React from "react";
import "./App.css";
import { connect } from "react-redux";
import MovieComponent  from "./components/MovieComponent"

function App(props) {
  console.log(props)
  const orderList = props.movies_list.sort((a,b)=>(a.rate < b.rate) ? 1 :-1);
  console.log(orderList);
  
   return (
   <div className="App">
      <header>
         <h1>TOP 10  Rating</h1>
      </header>
      <div className="container">
      <button onClick = {props.onRandomClick} >Random Rating</button>{
        Object.keys(props.movies_list).map(  (movie , index=0)=> {
          return <MovieComponent movie={orderList[movie]}   key={index++} ></MovieComponent> 
         })
      
    } 
      </div>
   </div>
  );
}
const mapStateToProps = (state) => { 
  const movies = state.movies;
  return  {
    "movies_list": movies
  };
}
const mapDispatchToProps = (dispatch)=> {
  return {
    onRandomClick: () => dispatch({type:'RANDOM_RATING'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
