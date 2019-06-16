import { movies } from "./movies.json";
const initialState = movies;

export const reducer = (state = initialState, action) => {
  console.log(initialState);
};
