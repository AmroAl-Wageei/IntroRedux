import "./App.css";

import React from "react";
import FunCount from "./FunCount/FunCount";
import ClassCount from "./ClassCount/ClassCount";
function App() {

  return (
    <div>
      <h1>Instal Redux</h1>

      <FunCount/>
      <ClassCount/>
    </div>
  );
}

export default App;

//SETUP REDUX

// npm i --save redux react-redux

// ---------------------------------------------------

//2 Reducer
// const reducer = ( state = [] , action ) => {

//   if (action.type === 'split') {
//   return action.data.split(' ')
// } else if (action.type == "Add") {
//    state.push(action.data);
//   return state;
// }
//   return state;
// }

// const reducer = ( state = [] , action ) => {
//   if (action.type == 'split' ) {
//     retuen action.data
//   } esle {
//     retren state;
//   }
// }

//1 Store
// const store = Redux.createStore(reducer)

// //3 Get State
// console.log(store.getState()) //[]

// //4 Action
// const action =  {
//   type: `split`,
//   data: `Amro Salah`,
// };

// //6 Dispatch
// store.dispatch(action)

// //5 Get State
// console.log(store.getState());

// const NewAction =  {
//   type: `Add`,
//   data: `Haya`,
// };

// store.dispatch(NewAction)

// console.log(store.getState());

// REDUX => Manage State
// Data Store => All data for app rather than send data by props
//Dispatch => To take action in reducer

// ---------------------------------------------------

// Action , Store , Reducer , State

// Reducer : JS Function return data.
// State   : Data for app
// Redux or store : JS Object or container contain all reducer + state
// Action : JS Object talk reducer to how change data and must have properity " type "

// ---------------------------------------------------

// When reducer return data it's make new state for this data
