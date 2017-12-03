/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */


class Addobjective extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            objective:'',
            kpi_value:'',
            year:'',
            pm:'',
            successstat:false,
            otherobj:false,
            showloader:false
        };
        this.onObjectivechange = this.onObjectivechange.bind(this);
        this.onKpichange = this.onKpichange.bind(this);
        this.onYearchange = this.onYearchange.bind(this);
        this.onPmChange = this.onPmChange.bind(this);
        this.saveobjective = this.saveobjective.bind(this);
        this.onOthObjectivechange = this.onOthObjectivechange.bind(this);
    }
    onObjectivechange(e){
        var self =this;
        if(e.target.value == "other"){
            self.setState({otherobj:true});
        }
        else{
            self.setState({objective:e.target.value,otherobj:false});
        }
        

    }
    onKpichange(e){
        this.setState({kpi_value:e.target.value});
    }
    onYearchange(e){
        this.setState({year:e.target.value});
    }
    onPmChange(e){
        this.setState({pm:e.target.value});   
    }
    onOthObjectivechange(e){
        this.setState({objective:e.target.value});
    }
    //Save Objective
    saveobjective(e){
        e.preventDefault();var self =this;
        console.log(this.state);
        //model/kpi_objectives/kpi_objective_class.php
        const request = window.superagent;        
        let send_data = this.state;var recallload = Getkpiobjective;

        self.setState({showloader:true},() => {
             request.post("model/kpi_objectives/kpi_objective_class.php")
                .send(JSON.stringify(send_data))
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                        const newresponse = JSON.parse(resp.text);
                        if(newresponse.status  == "success"){
                            document.getElementById("kpi_obj_frm").reset();
                            self.setState({successstat: true,showloader:false},()=>{
                                self.child.getObjectives();
                                self.child.getObjectiveList();
                                setTimeout(()=>{
                                self.setState({successstat:false});
                            }, 2500);
                            });
                            
                        }
                        else{
                            alert(newresponse.status);
                        }
                        
                    }
                });
        });
        
    }
    render(){
            return(
                <div>
                <div className="panel panel-default">
                <div className="panel-heading">Add Kpi Objectives &nbsp;&nbsp; {this.state.showloader==true?<span id="load_spin"></span>:""}</div>
                <div className="panel-body">

                    <form id="kpi_obj_frm" onSubmit={this.saveobjective}>
                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <select className="form-control" ref="objective_men" onChange={this.onObjectivechange}>                                    
                                    <option value="">Select Objective</option>
                                    <option value="overalltat">Overall TAT</option>
                                    <option value="step1_step4_tat">Step 1 to Step 4 TAT</option>
                                    <option value="raiseinvoice">Invoice Raised</option>
                                    <option value="bs6920projectinit">(BS6920) Project Initiation</option>
                                    <option value="bs6920ats">(BS6920) Agreed Timeline Success</option>
                                    <option value="bs6920ot">(BS6920) Overall TAT</option>
                                    <option value="bs6920raiseinvoice">(BS6920) Invoice Raised</option>
                                    <option value="prodevaltmvtat">(Prod Eval)TMV TAT</option>
                                    <option value="prodevalmtat">(Prod Eval) Meters TAT</option>
                                    <option value="prodevaltat">(Prod Eval) TAT</option>
                                    <option value="other">Other</option>
                                </select>
                                <br/>
                                {this.state.otherobj == true?<input type="text" className="form-control" ref="objective"  placeholder="Enter New Objective"   onChange={this.onOthObjectivechange} />:""}
                                

                            </div>
                        </div>
                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <input type="text" className="form-control" ref="kpi_value" placeholder="Kpi Value(if any)" onChange={this.onKpichange} />
                            </div>
                        </div>
                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <select className="form-control" ref="year" onChange={this.onYearchange}>

                                    <option value="">Year</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-3 nopadding">
                            <div className="form-group">
                                <div className="input-group">
                                    <select className="form-control" ref="pm" onChange={this.onPmChange}>
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
                                    <div className="input-group-btn">
                                        <button className="btn btn-success" type="submit" id="addBtn"> <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                </div>

            </div>
            {this.state.successstat == true? <div className="alert alert-success" ><strong>Success!</strong></div>:""}
            <br/>
            <Getkpiobjective ref={instance => { this.child = instance; }}/>
            </div>);
    }
}

ReactDOM.render(<Addobjective />,document.getElementById('addobjective'));


