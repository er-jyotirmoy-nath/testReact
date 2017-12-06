const selectUser = (item)=>{
  console.log('You Clicked on:',item.first);
  return{
    type:'USER_SELECTED',
    payload:item
  }
}
const adduser ={users} => {
  return {
    type:'USERS_ADDED',
    payload:users
  }
}
