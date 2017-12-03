/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */


class Bs6920Awaiting extends React.Component {
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
        let send_data = {load_step6: "get_step6_data"};
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
        const fetchInfo = {dataTotalSize: this.state.reports.length};
        function dataFormater(cell, row) {
            return  cell;
        }
        function bdataFormater(cell, row){
                       
            return (<Actionmodal componentname={"Step6form"} fromdata={cell} getReportingData={self.getReportingData}/>);
        }
        return (
                <BootstrapTable data={products} striped={true} hover={true}   hover={true}  condensed={true}  pagination={true} search={true} exportCSV={true} fetchInfo={fetchInfo}>
                    <TableHeaderColumn dataField="samplenumber" dataFormat={dataFormater} isKey={true}  dataSort={true}>Sample Number</TableHeaderColumn>
                    <TableHeaderColumn dataField="planneddate" dataFormat={dataFormater} dataSort={true}>Planned Dates</TableHeaderColumn>
                    <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true} >Company</TableHeaderColumn>
                    <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                    <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >MAT LAB</TableHeaderColumn>
                    <TableHeaderColumn dataField="odour" dataFormat={dataFormater} dataSort={true} >Odour & Flavour</TableHeaderColumn>
                    <TableHeaderColumn dataField="appearance" dataFormat={dataFormater} dataSort={true} >Appearance</TableHeaderColumn>
                    <TableHeaderColumn dataField="gmo" dataFormat={dataFormater}  >G.M.O.</TableHeaderColumn>
                    <TableHeaderColumn dataField="cyto" dataFormat={dataFormater}  >Cytotoxity</TableHeaderColumn>
                    <TableHeaderColumn dataField="extraction" dataFormat={dataFormater}  >Extraction of Materials</TableHeaderColumn>
                    <TableHeaderColumn dataField="pah" dataFormat={dataFormater}  >PAH</TableHeaderColumn>
                    <TableHeaderColumn dataField="temperature" dataFormat={dataFormater}  >Temperature</TableHeaderColumn>
                    <TableHeaderColumn dataField="edit" hidden={this.props.hideedit} dataFormat={bdataFormater}  >Edit</TableHeaderColumn>
                </BootstrapTable>
                );
    }
}

