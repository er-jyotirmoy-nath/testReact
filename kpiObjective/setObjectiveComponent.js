//Set new Value component
class Updateobjectivevalue extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			update_actual: "update",
			id:this.props.objid,
			kpi_value:this.props.kpivalue,
			value:''
		};
		this.setnewvalue = this.setnewvalue.bind(this);
	}

	setnewvalue(e){
		let newval = e.target.value;
		var self = this;
		self.setState({value:newval},()=>{
			var send_data = this.state;
			
			
				const request = window.superagent;
				request.post("model/kpi_objectives/kpi_objective_class.php")
                .send(JSON.stringify(send_data))
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                    	console.log(resp.text);
                        
                        
                    }
                });
			
		});
		
	}
	render(){
		return(<div><input className="form-control" defaultValue={this.state.kpi_value==false?"":this.state.kpi_value} onBlur={this.setnewvalue} /></div>);
	}
}