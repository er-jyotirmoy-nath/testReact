

class UserDetail extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    
  }

  render(){
    return (

      <div>
            <h4>{this.props.activeUser.first}</h4>
            <br/>
            <img  src={this.props.activeUser.thumbnail} />
            <p>{this.props.activeUser.description}</p>
        </div>

    );
  }
}

 function mapStateToProps(state) {
  return{activeUser:state.activeUser}
}
const Userdetail =  connect(mapStateToProps)(UserDetail);
