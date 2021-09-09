import { createStore } from "redux";
import reducer from "./Reducers/index";


// in this redux store takes a couple of arguments
// 1.reducer
// 2.{} it is an empty state


const store = createStore(reducer,    {}, window.devToolsExtension && window.devToolsExtension()
);


export default store;


// we have created a store and 
// in react application it dnt make any difference 
// if we want to see the difference in Chrome we need an extesion
// we need to add this tool inside the createStore (. ,{}, window.devToolsExtension && window.devToolsExtension())
// after this we need to link our react applcation with our redux store for this go to indexedDB.js in src folder 
// we need to import he provider,
// affter ading this go to browser and inspect go to redux we can able to see the store 
// in that go to state we have the product


// after that we going to create a component for that we need to go to Continer folder in src