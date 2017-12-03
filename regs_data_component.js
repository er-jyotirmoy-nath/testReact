/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */
class BS6920 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pan11:'Loading..',
            pan12:'Loading..',
            pan13:'Loading..',
            pan14:'Loading..',
            pan15:'Loading..',
            pan16:'Loading..',
            pan17:'Loading..',
            pan18:'Loading..',
            pan19:'Loading..'
        };
    }
    getAllData(){
        const request = window.superagent;var self = this;
        let send_data = {BS6920_func_load1: "BS6920_func_load1"};
        request.post("model/regs_data_report_model.php")
                .set('Content-Type', 'application/json')
                .send(send_data)
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                        
                        var newresponse = JSON.parse(resp.text);
                        
                        self.setState({pan11:newresponse.pan11,pan12:newresponse.pan12,pan13:newresponse.pan13
                            ,pan14:newresponse.pan14,pan15:newresponse.pan15,pan16:newresponse.pan16,pan17:newresponse.pan17
                            ,pan18:newresponse.pan18,pan19:newresponse.pan19});
                    }
                });
        
    }
    componentWillMount(){
        
        this.getAllData();
        
    }
    refreshdata(){
       
        this.getAllData();
    }
    render(){
        return(<div className="panel panel-red">
            <div className="panel-heading">
                <label><i>BS6920</i></label>
            </div>
            <div className="panel-body">
                <div className="list-group">
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Projects greater than 180 days & less than 269 days
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_19">{this.state.pan11}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Projects greater than 270 days & less than 359 days
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_20">{this.state.pan12}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Projects greater than 360 days
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_21">{this.state.pan13}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Total New Applications added
                        <a href="model/regs_data/export_excel.php?page=new_apps" className="badge" style={{'backgroundColor': '#03A9F4','borderColor': '#03A9F4'}}>Export</a>
                        <span  className="pull-right text-muted small"><span className="badge"><em id="pan_11">{this.state.pan14}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Total Applications Completed
                        <a href="model/regs_data/export_excel.php?page=apps_complete" className="badge" style={{'backgroundColor': '#03A9F4','borderColor': '#03A9F4'}}>Export</a>
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_12">{this.state.pan15}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Total Applications progressed to lab for testing
                        <a href="model/regs_data/export_excel.php?page=apps_progressed" className="badge" style={{'backgroundColor': '#03A9F4','borderColor': '#03A9F4'}}>Export</a>
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_13">{this.state.pan16}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Total Applications waiting for final report
                        <a href="model/regs_data/export_excel.php?page=apps_report" className="badge" style={{'backgroundColor': '#03A9F4','borderColor': '#03A9F4'}}>Export</a>
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_16">{this.state.pan17}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Invoiced so far this month 
                        <a href="model/regs_data/export_excel.php?page=invoicing" className="badge" style={{'backgroundColor': '#03A9F4','borderColor': '#03A9F4'}}>Export</a>
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_17">{this.state.pan18}</em></span>
                        </span>
                    </li>
                    <li  className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> Success against agreed dates                         
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_18">{this.state.pan19}</em>%</span>
                        </span>
                    </li>


                </div>
                
                <button type="button" id="btn_push3" role="button"  className="btn btn-default btn-block" onClick={this.refreshdata.bind(this)}>Refresh</button>
            </div>
            <div className="panel-footer">
                <i className="fa fa-sitemap" aria-hidden="true"></i>
            </div>
        </div>);
    }
}


class Prodevalwatermeters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pan1:'Loading..',
            pan2:'Loading..',
            pan3:'Loading..',
            pan4:'Loading..',
            pan5:'Loading..',
            pan6:'Loading..'            
        };
    }
    getAllData(){
        const request = window.superagent;var self = this;let send_data;
        switch(this.props.paneltype){
            case'prodevalwater':
                send_data = {prod_eval_get_water: "prod_eval_get_water"};
                break;
            case'prodevaltmv':
                send_data =  {prod_eval_get_tmv: "prod_eval_get_tmv"};
                break;
            case 'prodeval':
                send_data = {prod_eval_get: "prod_eval_get"};
                break;
            case'regs':
                send_data = {avg_tat_get: "avg_tat_get"};
                break;
        }
        
        request.post("model/regs_data_report_model.php")
                .set('Content-Type', 'application/json')
                .send(send_data)
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                        
                        var newresponse = JSON.parse(resp.text);
                        console.clear();
                        console.log(newresponse);
                        switch(self.props.paneltype){
                            case'prodevalwater':                                
                                self.setState({pan1:newresponse.pan28,pan2:newresponse.pan29,pan3:newresponse.pan30
                                ,pan4:newresponse.pan31,pan5:newresponse.pan32,pan6:newresponse.pan33});
                                break;
                            case'prodevaltmv':
                                self.setState({pan1:newresponse.pan22,pan2:newresponse.pan23,pan3:newresponse.pan24
                                ,pan4:newresponse.pan25,pan5:newresponse.pan26,pan6:newresponse.pan27});
                                break;
                            case'prodeval':
                                self.setState({pan1:newresponse.pan5,pan2:newresponse.pan6,pan3:newresponse.pan7,
                                pan4:newresponse.pan8,pan5:newresponse.pan9,pan6:newresponse.pan10});
                                break;
                            case'regs':
                                self.setState({pan1:newresponse.pan1,pan2:newresponse.pan2,pan3:newresponse.pan3
                                    ,pan4:newresponse.pan4,pan5:newresponse.pan14,pan6:newresponse.pan15});
                        }
                        
                    }
                });
        
    }
    componentWillMount(){
        console.clear();
        this.getAllData();
        
    }
    refreshdata(){
       
        this.getAllData();
    }
    render(){
        return (<div className="panel panel-yellow" style={{'borderColor': this.props.colorsink}}>
            <div className="panel-heading" style={{'borderColor': this.props.colorsink,'backgroundColor': this.props.colorsink}}>
                <label><i>{this.props.title}</i></label>
            </div>
            <div className="panel-body">

                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <i className="fa fa-bolt" aria-hidden="true"></i> {this.props.subtop1}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_22">{this.state.pan1}</em></span>
                        </span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-fire" aria-hidden="true"></i> {this.props.subtop2}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_23">{this.state.pan2}</em></span>
                        </span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-handshake-o" aria-hidden="true"></i> {this.props.subtop3}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_24">{this.state.pan3}</em></span>
                        </span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> {this.props.subtop4}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_25">{this.state.pan4}</em></span>
                        </span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> {this.props.subtop5}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_26">{this.state.pan5}</em></span>
                        </span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-folder-open" aria-hidden="true"></i> {this.props.subtop6}
                        <span className="pull-right text-muted small"><span className="badge"><em id="pan_27">{this.state.pan6}</em></span>
                        </span>
                    </a>

                </div>
                
                <button type="button" id="btn_push2" role="button"  className="btn btn-default btn-block" onClick={this.refreshdata.bind(this)}>Refresh</button>
            </div>
            <div className="panel-footer">
                <i className="fa fa-sitemap" aria-hidden="true"></i>
            </div>
        </div>);
    }
}
class RegsComponent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(<div><div className="row">
    <div className="col-lg-4">
       <Prodevalwatermeters title="Prod Eval" 
        colorsink="#f0ad4e"
        paneltype="prodeval" 
        subtop1="Open projects" 
        subtop2="New projects" 
        subtop3="Completed projects" 
        subtop4="Projects greater than 180 days & less than 269 days" 
        subtop5="Projects greater than 270 days & less than 359 days" 
        subtop6="Projects greater than 360 days"/>
        
        
    </div>
    <div className="col-lg-4">
        <Prodevalwatermeters title="Prod Eval (TMV)" 
        colorsink="#2196f3"
        paneltype="prodevaltmv" 
        subtop1="Open projects" 
        subtop2="New projects" 
        subtop3="Completed projects" 
        subtop4="Projects greater than 180 days & less than 269 days" 
        subtop5="Projects greater than 270 days & less than 359 days" 
        subtop6="Projects greater than 360 days"/>
        
    </div>
    <div className="col-lg-4">        
      <Prodevalwatermeters title="Prod Eval Water Meters" 
        colorsink="#337ab7" 
        paneltype="prodevalwater" 
        subtop1="Open projects" 
        subtop2="New projects" 
        subtop3="Completed projects" 
        subtop4="Projects greater than 180 days & less than 269 days" 
        subtop5="Projects greater than 270 days & less than 359 days" 
        subtop6="Projects greater than 360 days"/>
    </div>
</div>
<div className="row">
    <div className="col-lg-4">
        <Prodevalwatermeters title="Regs" 
        colorsink="#5cb85c"
        paneltype="regs" 
        subtop1="AVG TAT Completed Files" 
        subtop2="New projects" 
        subtop3="Completed projects" 
        subtop4="Projects greater than 180 days & less than 269 days" 
        subtop5="Projects greater than 270 days & less than 359 days" 
        subtop6="Projects greater than 360 days"/>
    
        
        
    </div>
    <div className="col-lg-4">
        
        
    </div>
    <div className="col-lg-4">
    <BS6920/>
        
        
    </div>
</div></div>);
    }
}

ReactDOM.render(<RegsComponent />, document.getElementById('regs_root'));