import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import StreamCreate from './Streams/StreamCreate.js';
import "./ModelComponent.css";
import { createStream } from '../Action/index.js';


class ModelComponent extends React.Component {

   state = {
     modal: false,
   };

   toggle=()=> {

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    oneMore= async(formValue)=> {
          this.props.createStream(formValue);
      }

      deleteMe=(id) => {
        console.log("Will Delete This !")
//          this.props.deleteStream(id)
      }


  render() {

    return(
      <div className="Model-Container">
       <button color="danger" onClick={this.toggle} style={{fontFamily: "Montserrat", fontWeight: "bold"}} className="Create-Model btn"> Create </button>
       <Modal isOpen={this.state.modal} toggle={this.toggle}>
         <ModalHeader style={{ color: "black"}} toggle={this.toggle}>Hi {this.props.user.name} !
         </ModalHeader>
         <ModalBody>
            <StreamCreate toggle={this.toggle} oneMore={this.oneMore} />
         </ModalBody>
       </Modal>
     </div>
    )
  }
}

const mapStatetoProps=(state) => {
 return {user: state.auth};
}


export default connect(mapStatetoProps,{createStream})(ModelComponent);
