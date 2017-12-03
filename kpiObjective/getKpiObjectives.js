

//Get Objectives Table
class Getkpiobjective extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			objectivelist : [],
			tableresponse:'',
			objectiveoptions: [],
			selectoption:''
		};
		this.getObjectives = this.getObjectives.bind(this);
		this.getObjectiveList = this.getObjectiveList.bind(this);
		this.Filterlistbypm = this.Filterlistbypm.bind(this);
		this.Filterlistbyobjective = this.Filterlistbyobjective.bind(this);
	}

	componentWillMount(){
		this.getObjectives();
		this.getObjectiveList();
	}
	getObjectiveList(){
		var self = this;var options = '';
		const request = window.superagent;
		let send_data = {"getobjectivelist":"get"};
		request.post("model/kpi_objectives/kpi_objective_class.php")
				.send(JSON.stringify(send_data))
				.end(function(err,resp){
					if(err){console.error(err);}
					else{
						var newresponse = JSON.parse(resp.text);
						self.setState({objectiveoptions:newresponse},()=>{
							
							options = self.state.objectiveoptions.map((item)=>{
								return (<option value={item.objectives} key={item.objectives}>{item.objectives}</option>);
							});
						});

						self.setState({selectoption:options});
					}
				});
	}
	getObjectives(){
		var self = this;let tablestring = '';
		let send_data = {get_response: "get"};
		const request = window.superagent;
		request.post("model/kpi_objectives/kpi_objective_class.php")
                .send(JSON.stringify(send_data))
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                    	let newresponse = JSON.parse(resp.text);
                        self.setState({objectivelist:newresponse},()=>{
                        	tablestring = self.state.objectivelist.map(function(item){
                        		return (<tr key={item.objective_id}><td>{item.pm}</td><td>{item.objective_type}</td><td>{item.set_value}</td>
                        			<td><Updateobjectivevalue objid={item.objective_id} kpivalue={item.actual_value} /></td>
                        			<td>{item.year}</td>
                        			<td><DeleteObjective objid={item.objective_id} getObjectives={self.getObjectives}/></td></tr>
                        			);
                        	});

                        });
                        self.setState({tableresponse:tablestring});
                    }
                });
	}
	Filterlistbypm(e){
		var filterstring = e.target.value;var temp = [];var tablestring = '';var self = this;
		if(filterstring == 'all'){
			temp = this.state.objectivelist;
		}
		else{
			temp = this.state.objectivelist.filter(function(item){
			return item.pm == filterstring;
			});

		}		

		tablestring = temp.map(function(item){
                        		return (<tr key={item.objective_id}><td>{item.pm}</td><td>{item.objective_type}</td><td>{item.set_value}</td>
                        			<td><Updateobjectivevalue objid={item.objective_id} kpivalue={item.actual_value} /></td>
                        			<td>{item.year}</td>
                        			<td><DeleteObjective objid={item.objective_id} getObjectives={self.getObjectives}/></td></tr>);
                        	});
		this.setState({tableresponse:tablestring});
	}
	Filterlistbyobjective(e){
		var filterstring = e.target.value;var temp = [];var tablestring = '';var self = this;
		console.log(filterstring);
		if(filterstring == 'all'){
			temp = this.state.objectivelist;
		}
		else{
			console.log(this.state.objectivelist);
			temp = this.state.objectivelist.filter(function(item){
			return item.objective_type == filterstring;
			});

		}		

		tablestring = temp.map(function(item){
                        		return (<tr key={item.objective_id}><td>{item.pm}</td><td>{item.objective_type}</td><td>{item.set_value}</td>
                        			<td><Updateobjectivevalue objid={item.objective_id} kpivalue={item.actual_value} /></td>
                        			<td>{item.year}</td>
                        			<td><DeleteObjective objid={item.objective_id} getObjectives={self.getObjectives}/></td></tr>);
                        	});
		this.setState({tableresponse:tablestring});
	}
	render(){
		return(
			<div>
			<div className="row">
                <div className="col-lg-12">
                    <div className="col-sm-3 nopadding">
                        <div className="form-group">  
                            
                            <select className="form-control" ref="filter_pm" onChange={this.Filterlistbypm}>
                                <option value="all">All</option>
                                <option value="">Select PM</option>
                                        <option value="Christopher Jones">Christopher Jones </option>
										<option value="Dean Yemm">Dean Yemm </option>
                                        <option value="Ellie Burger">Ellie Burger </option>
                                        <option value="Gareth Mapp">Gareth Mapp </option>
                                        <option value="Jo Ralph">Jo Ralph </option>
                                        <option value="Lee Nichols">Lee Nichols </option>
                                        <option value="Lewis Walters">Lewis Walters </option>
										<option value="Lissa Edwards">Lissa Edwards </option>
                                        <option value="Lloyd-rhys Davies">Lloyd-rhys Davies </option>
                                        <option value="Luke Yates">Luke Yates </option>
                                        <option value="Mandy Maggs">Mandy Maggs </option>
										<option value="Mary Ann Taylor">Mary Ann Taylor </option>
										<option value="Nethan Nichols">Nethan Nichols </option>
                                        <option value="Owain Richards-green">Owain Richards-green </option>
                                        <option value="Ruth Manning">Ruth Manning </option>
                                        <option value="Shirley Wedlock">Shirley Wedlock </option>
                                        <option value="Tia James">Tia James </option>
                            </select>  
                        </div>
                    </div>
                    <div className="col-sm-3 nopadding">
                        <div className="form-group">  
                            
                            <select className="form-control" ref="filter_object" onChange={this.Filterlistbyobjective}>                                    
                                    <option value="all">Select Objective</option>
                                    {this.state.selectoption}
                                    
                                </select>
                        </div>
                    </div>
                    <table  className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-lg-1">Name</th>
                                <th className="col-lg-1">Objective</th>
                                <th className="col-lg-3">Kpi Value</th>
                                <th className="col-lg-7">Actual Value</th>
                                <th className="col-lg-7">Year</th>                                
                                <th className="col-lg-1">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.tableresponse}
                        </tbody>
                    </table>
                   

                </div>
            </div></div>
			);


	}
}

