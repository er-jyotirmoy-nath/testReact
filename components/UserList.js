const {bindActionCreators} = Redux;
 let {connect} = window.ReactRedux;
class UserList extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  showUsers(){
    return this.props.users.map((item)=>{
      return <li key={item.id} onClick={()=>
        this.props.selectUser(item)
      }>{item.first} {item.last} </li>
    });
  }
  render(){
    return (
      <ul>
        {this.showUsers()}
      </ul>
    );
  }
}
 function mapStateToProps(state) {
  return{users:state.users}
}
function  matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser:selectUser},dispatch)
}
const Userlist = connect(mapStateToProps,matchDispatchToProps)(UserList);
