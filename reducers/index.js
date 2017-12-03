const {combineReducers} = Redux;
const allReducer = combineReducers({
  users:userReducer,
  activeUser:userActive
});
