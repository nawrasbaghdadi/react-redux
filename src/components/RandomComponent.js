import React from "react";
import { connect } from "react-redux";
import { Subject } from "rxjs";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let subscription, interval;
const sub = new Subject();
const observable = sub.asObservable();
const clickHandle = function(
  list,
  onRateChanges,
  isRandomClicked,
  RandomClickHandle
) {
  RandomClickHandle();
  if (isRandomClicked === false) {
    subscription = observable.subscribe(payload => {
      onRateChanges(payload.RandomVote, payload.RandomMovieId);
    });
    interval = setInterval(() => {
      let RandomMovieId = list[getRandomInt(list.length - 1)].movie_id;
      let RandomVote = getRandomInt(5);
      sub.next({ RandomMovieId, RandomVote });
    }, 1000);
  } else if (interval && subscription) {
    clearInterval(interval);
    subscription.unsubscribe();
    interval = null;
    subscription = false;
  }
};
const RandomComponent = props => {
  return (
    <button
      onClick={() =>
        clickHandle(
          props.movies_list,
          props.onRateChanges,
          props.randomClicked,
          props.onRandomClicked
        )
      }>
      Random Rating
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRateChanges: (val, id) =>
      dispatch({ type: "RATE_CHANGE", payload: { val, id } }),
    onRandomClicked: () => dispatch({ type: "RANDOM_RATING_START" })
  };
};

const mapStateToProps = state => {
  const movies = state.movies;
  return {
    movies_list: movies,
    randomClicked: state.random_button_clicked
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomComponent);
