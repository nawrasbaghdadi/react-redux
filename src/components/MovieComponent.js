import React, { Fragment } from "react";

const HeartComponent = props => {
  let isVoted = false,
    hasInput = props.hasInput ? true : false;
  if (props.initialRate) {
    if (props.initialRate >= props.index) {
      console.log("yes");
      isVoted = true;
    }
  }
  return (
    // prettier-ignore
    <Fragment>
    {(hasInput) &&
      <input type="radio" id={`heart${props.index}`} name="rating" value={`${props.index}`} className="rating__hearts__heart" />
    }
      <label className={`rating__hearts_label ${isVoted ? "yes" : ""}`} htmlFor={`heart${props.index}`} title={`${props.index} heart`}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32" fill="#fff">
          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" />
        </svg>
      </label>
    </Fragment>
  );
};
const MovieComponent = props => {
  let initialRate = Math.floor(props.movie.rate);
  console.log(initialRate);
  return (
    // prettier-ignore
    <div className="movie_card" data-rating={props.movie.rate} data-order={props.movie.order}>
        <div className="movie_card__media">
           <img src={`/thumbs/${props.movie.thumb}`} alt ={`${props.movie.name}`} />
        </div>
        <div className="movie_card__info">
           <h2 className="movie_card__info__title">{props.movie.name}</h2>
           <div className="rating">
           <div className="rating__child">
               <div className="rating__lead">Current Rating : </div>{
                  [...Array(5)].map((x,i)=> <HeartComponent index ={++i} initialRate = {initialRate} hasInput={false}></HeartComponent>)
               }
            </div>
            <div className="rating__child">
              <div className="rating__lead">Rate this movie : </div>
              <form action="">
                 <fieldset className="rating__hearts" >
                 {
                    [...Array(5)].map((x,i)=> <HeartComponent index ={++i}  hasInput={false}></HeartComponent>)
                 }

                 </fieldset>
              </form>
              </div>
           </div>
        </div>
     </div>
  );
};

export default MovieComponent;
