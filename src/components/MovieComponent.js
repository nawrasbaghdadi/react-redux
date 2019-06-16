import React from 'react'; 

const MovieComponent = (props)=> {
    return (
        <div className="movie_card" data-rating={props.movie.rate} data-order={props.movie.order}>
        <div className="movie_card__media">
           <img src={`/thumbs/${props.movie.thumb}`} alt ={`${props.movie.name}`} />
        </div>
        <div className="movie_card__info">
           <h2 className="movie_card__info__title">{props.movie.name}</h2>
           <div className="rating">
            <div className="rating__lead">Current Rating : {props.movie.rate}  out of  {props.movie.votes.length} vote</div>
            <div className="rating__child">
              <div className="rating__lead">Rate this movie : </div>

              <form action="">
                 <fieldset className="rating__hearts" >
                    <input type="radio" id="heart1" name="rating" value="1" className="rating__hearts__heart" />
                    <label className="rating__hearts_label" htmlFor="heart1" title="Sucks big time - 1 heart">
                     
                       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                       </svg>
                    </label>
                    <input type="radio" id="heart2" name="rating" value="2" className="rating__hearts__heart"/>
                    <label className="rating__hearts_label" htmlFor="heart2" title="Kinda bad - 2 hearts"  >
                    
                       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                       </svg>
                    </label>
                    <input type="radio" id="heart3" name="rating" value="3" className="rating__hearts__heart" />
                    <label className="rating__hearts_label" htmlFor="heart3" title="Meh - 3 hearts" >
                    <span className="rating__hearts__mask"></span> 
                       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                       </svg> 
                    </label>
                    <input type="radio" id="heart4" name="rating" value="4" className="rating__hearts__heart" />
                    <label className="rating__hearts_label" htmlFor="heart4"  title="Pretty good - 4 heart">
                    
                       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                       </svg>
                    </label>
                    <input type="radio" id="heart5" name="rating" value="5" className="rating__hearts__heart" />
                    <label className="rating__hearts_label" htmlFor="heart5" title="Awesome - 5 heart" >
                    
                       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                       </svg>
                    </label>
                 </fieldset>
              </form>
              </div>
           </div>
        </div>
     </div>
    );
};

export default MovieComponent;