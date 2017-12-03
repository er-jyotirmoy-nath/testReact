//Set new Value component
class DeleteObjective extends React.Component{
	constructor(props){
		super(props);
		this.state = {			
			delete_obj: "true",objid:this.props.objid
		};
		this.setnewvalue = this.deletevalue.bind(this);
	}

	deletevalue(e){
		e.preventDefault();var self = this;
		var send_data = self.state;
		const request = window.superagent;
		request.post("model/kpi_objectives/kpi_objective_class.php")
                .send(JSON.stringify(send_data))
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                    	console.log(resp.text);                       
                        self.props.getObjectives();
                    }
                });		
		
		
	}
	render(){
		return(<div><button className="btn btn-danger" onClick={this.deletevalue.bind(this)} ><span className="glyphicon glyphicon-minus" aria-hidden="true" ></span></button></div>);
	}
}