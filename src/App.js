import React, { useMemo } from "react";
import "./App.css";
import { connect } from "react-redux";
import MovieComponent from "./components/MovieComponent";
import RandomComponent from "./components/RandomComponent";

function App(props) {
  const orderList = useMemo(
    () => props.movies_list.slice().sort((a, b) => b.rate - a.rate),
    [props.movies_list]
  );
  return (
    <div className="App">
      <header>
        <h1>TOP 10 Rating</h1>
      </header>
      <div className="container">
        <RandomComponent
          clickHandle={props.onRandomClick}
          randomClicked={props.random_button_clicked}
        />
        {Object.keys(props.movies_list).map((movie, index = 0) => {
          return (
            <MovieComponent
              movie={orderList[movie]}
              key={index++}
              rateHandle={props.onRateChanges}
            />
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  const movies = state.movies;
  return {
    movies_list: movies,
    randomClicked: state.random_button_clicked
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRandomClick: () => dispatch({ type: "RANDOM_RATING_START" }),
    onRateChanges: (val, id) =>
      dispatch({ type: "RATE_CHANGE", payload: { val, id } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
