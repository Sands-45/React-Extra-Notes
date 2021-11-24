# React-Extra-Notes
//Redux
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  return action.type === "LOGIN"?{...state,login:true}:state
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// using Switch statement to conditionally update the state in Redux 
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type){
    case "LOGIN":
    return {authenticated:true}
    break;
    case "LOGOUT":
    return {authenticated:false}
    break;
    default:
    return {authenticated:false}
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
