import React, { Fragment } from "react";

const HeartComponent = props => {
  let isVoted = false,
    hasInput = props.hasInput ? true : false;
  if (props.initialRate && props.initialRate >= props.index && !hasInput) {
    isVoted = true;
  }
  return (
    // prettier-ignore
    <Fragment>
    {(hasInput) &&
      <input type="radio" id={`heart${props.index}_${props.movieId}`} name={`rating_${props.movieId}`} value={props.index} className="rating__hearts__heart"
         onChange={e => props.rateHandle(e.target.value, props.movieId)} />
    }
      <label className={`rating__hearts_label ${isVoted ? "yes" : ""}`} htmlFor={`heart${props.index}_${props.movieId}`} title={`${props.index} heart`}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32" fill="#fff">
          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" />
        </svg>
      </label>
    </Fragment>
  );
};
export default HeartComponent;
