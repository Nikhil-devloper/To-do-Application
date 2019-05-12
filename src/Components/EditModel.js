
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import EditFormModel from './EditFormModel';


class EditModel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button className="edit-btn" onClick={(event) => {
          event.stopPropagation()
          this.toggle()
        }
      }><i className="fa fa-edit"></i></button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
          <ModalBody>

            <EditFormModel rec={this.props.rec} toggle={this.toggle}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditModel;
