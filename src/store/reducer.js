import data from "./movies.json";
const initialState = data;

function avg(arr) {
  let sum = arr.reduce((acc, crr) => {
    return acc + crr;
  }, 0);
  let leng = arr.length;
  return sum / leng;
}
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "RANDOM_RATING":
      console.log("clicked");
      break;

    case "RATE_CHANGE":
      console.log("rate changes");
      let val = parseInt(action.payload.val);
      let id = action.payload.id;
      return {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.movie_id === id) {
            const newVotes = [...movie.votes, val];
            const newRate = avg(newVotes);
            return { ...movie, votes: newVotes, rate: newRate };
          }
          return movie;
        })
      };

    default:
      return newState;
  }

  //action.type === 'END_RANDOM_RATING'
  return newState;
};
export default reducer;
