/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */


class Bs6920Reporting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: []
        };


    }
    componentDidMount() {
        this.getReportingData();
    }
    getReportingData() {
        var self = this;
        const request = window.superagent;
        let valuenew = 0;
        let send_data = {load_step7_2: "get_step7_data"};
        request.post("model/bs6920_dashboard/bs6920_model.php")
                .send(send_data)
                .end(function (err, resp) {
                    if (err) {
                        console.error(err);
                    } else {
                        const newresponse = JSON.parse(resp.text);
                        
                        self.setState({reports: newresponse});
                    }
                });
    }

    render() {
        var products = this.state.reports;
        //const fetchInfo = {dataTotalSize: this.state.reports.length};
        function dataFormater(cell, row) {
            return  cell;
        }
        return (
                <BootstrapTable data={products} striped={true} hover={true}   hover={true}  condensed={true}  pagination={true} search={true} exportCSV={true} >
                    <TableHeaderColumn dataField="sample_number" dataFormat={dataFormater} isKey={true}  dataSort={true}>Sample Number</TableHeaderColumn>
                    <TableHeaderColumn dataField="pm" dataFormat={dataFormater} dataSort={true}>PM</TableHeaderColumn>
                    <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                    <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >Matlab</TableHeaderColumn>
                    <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true} >Company</TableHeaderColumn>
                    <TableHeaderColumn dataField="contactname" dataFormat={dataFormater} dataSort={true} >Contact Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="testingfinish" dataFormat={dataFormater} dataSort={true} >Testing Finish</TableHeaderColumn>
                    <TableHeaderColumn dataField="filestatus" dataFormat={dataFormater}  >File Status</TableHeaderColumn>
                    <TableHeaderColumn dataField="edit" hidden={this.props.hideedit} dataFormat={dataFormater}  >Edit</TableHeaderColumn>
                </BootstrapTable>
                );
    }
}

