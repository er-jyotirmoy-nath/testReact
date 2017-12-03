/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */

//$key.'@'.$this->row["SAMPLE_NUMBER"].(date("H:i d F Y", strtotime("now")) ).$_SESSION["staff_name"]
class Step5form extends React.Component {
    constructor(props){
        super(props);
        let recv = '';
        recv = this.props.fromdata;
        let datapush = recv.split('@');
        this.state = {
            sample_number:datapush[1],
            comments:'',
            step_type:'step5',
            person:datapush[3],
            time:datapush[2],
            sample_ok:'ok',
            key:datapush[0],
            not_send:'no',
            permission:'1',
            raised_issue:'',
            responsetext:''
            
        };
        this.submitStep5Form = this.submitStep5Form.bind(this);
        this.updateComments = this.updateComments.bind(this);
    }
    updateComments(e){
        this.setState({comments:e.target.value});
    }
    submitStep5Form(e){
        e.preventDefault();const request = window.superagent;var self = this;
        this.setState({
            sample_number:this.state.sample_number,            
            step_type:"step5",
            person:this.state.person,
            time:this.state.time,
            sample_ok:'ok',
            key:this.state.key,
            not_send:'no',
            permission:'1',
            raised_issue:''
        },()=>{
            request.post('post_comment.php')
            .type('form')
            .send(this.state)            
            .end(function(err,resp){
                if(err){console.error(err);}else{self.setState({responsetext:resp.text});self.props.getReportingData();self.props.closemodal();}
            })
        });
    }
    render(){
        
        return (<div>
        {this.state.responsetext}
        <form  method="post" onSubmit={this.submitStep5Form}>
                            <div className="form-group">
                                <label for="recipient-name" className="form-control-label">Project Number:</label>
                                <input type="text" className="form-control" ref="sample_number" value={this.state.sample_number} readonly="readonly" />
                            </div>
                            <div className="form-group">
                                <label for="message-text" className="form-control-label" >Message:</label>
                                <textarea className="form-control" ref="comments" onChange={this.updateComments}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" id="testing_rev_comp"  > Testing and Review Complete </button>

        </form></div>);
    }
}