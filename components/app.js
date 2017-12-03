



class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){

    return (
      <div>
         <h2>User List</h2>
         <Userlist />
         <hr />
         <h2>User Details</h2>
         <Userdetail />
     </div>
    );
  }
}
