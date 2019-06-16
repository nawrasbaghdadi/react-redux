import  data  from "./movies.json";
const initialState = data;

const reducer = (state = initialState, action) => {
  const newState = {...state} ;
  //take the state and based on the action change the state and return new state , alwyas make copy of the state
  if(action.type === 'RANDOM_RATING'){
    //
    console.log('clicked');
  }
  
  //action.type === 'END_RANDOM_RATING'
  return newState;
};
export default reducer;
