
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './DeleteModel.css';
import { deleteStream } from '../Action/index.js';
import { connect } from 'react-redux';

class DeleteModel extends React.Component {


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

  myDelete=(id) => {
    this.props.deleteStream(id)
    this.toggle()
  }

  render() {
    return (
      <div>
        <button className="delete-btn" onClick={(event) => {
          event.stopPropagation()
          this.toggle()
        }}><i className="fa fa-close"></i></button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.rec.title}</ModalHeader>
          <ModalBody>
              Are you sure you want to delete this task ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.myDelete(this.props.rec.id)}>Yes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null,{deleteStream})(DeleteModel);
