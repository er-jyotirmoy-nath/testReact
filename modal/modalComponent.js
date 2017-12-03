/* 
 * The code on this file is licensed to NSF International
 * All rights reserved
 */


 class Actionmodal extends React.Component {
  constructor(props){
            super(props);
            this.state = { showModal: false };
            this.close = this.close.bind(this);
            this.open = this.open.bind(this);
        }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    var Button = window.ReactBootstrap.Button;
     var Modal = window.ReactBootstrap.Modal;
     var Modalbody;
     switch(this.props.componentname){
         case"Step5form":
            Modalbody = Step5form;
             break;
         case"Step4form":
            Modalbody = Step4form;
            break;
     }
    return (
      <div>
         <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open.bind(this)}
        >
          <span className="glyphicon glyphicon-edit"></span>
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <Modalbody  fromdata={this.props.fromdata} getReportingData={this.props.getReportingData} closemodal={this.close}/>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

