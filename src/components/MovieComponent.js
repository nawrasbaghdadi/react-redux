import React from "react";
import HeartComponent from "./HeartComponent";

const MovieComponent = props => {
  let initialRate = Math.floor(props.movie.rate);
  let movieId = props.movie.movie_id;
  let previousRating = [],
    currentRating = [];
  for (let i = 5; i >= 1; i--) {
    previousRating.push(
      <HeartComponent
        index={i}
        initialRate={initialRate}
        hasInput={false}
        key={Math.random()}
      />
    );
    currentRating.push(
      <HeartComponent
        index={i}
        initialRate={initialRate}
        hasInput={true}
        rateHandle={props.rateHandle}
        movieId={movieId}
        key={Math.random()}
      />
    );
  }
  return (
    // prettier-ignore
    <div className="movie_card"  data-rating={props.movie.rate} data-order={props.movie.order}>
        <div className="movie_card__media">
           <img src={`/thumbs/${props.movie.thumb}`} alt ={`${props.movie.name}`} />
        </div>
        <div className="movie_card__info">
           <h2 className="movie_card__info__title">{props.movie.name}</h2>
           <div className="rating">
           <div className="rating__child">
               <div className="rating__lead">Current Rating : </div>{
                previousRating
               }
            </div>
            <div className="rating__child">
              <div className="rating__lead">Rate this movie : </div>
              <form action="">
                 <fieldset className="rating__hearts" >
                 {
                  currentRating
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
