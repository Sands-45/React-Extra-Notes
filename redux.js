//Redux core principles
//Default State ============
const defaultState = {
  authenticate: false,
};
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//Reducer Responsible of updating the state based on the action
const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { aunthenticate: true };
      break;
    case 'LOGOUT':
      return { aunthenticate: false };
      break;
    default:
      return state;
  }
};

//Redux new Store
const store = Redux.createStore(loginReducer);

//Action Creators
const loginAction = (note) => {
  return {
    type: LOGIN,
    msg: note,
  };
};

const logoutAction = (note) => {
  return {
    type: LOGOUT,
    msg: note,
  };
};

//Adding a listeners or subscribing to the store chenges
let count;
store.subscribe((count) => (count = +1));

//dispatching an action
store.dispatch({ type: LOGIN });
store.dispatch({ type: LOGOUT });

//Combining multiple reducers
const combinedReducers = Redux.combineReducers({
  auth: loginReducerOne,
  authTwo: loginReducerTwo,
});

//Setting Up a Middleware
const storeTwo = Redux.createStore(
  loginReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

//To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). This statement is then provided as a second optional parameter to the createStore() function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests.

const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice'],
      };
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  };
};
