import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import {editStream} from '../Action/index.js';

class EditFormModel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
              title: this.props.rec.title,
              description: this.props.rec.description,
              priority:this.props.rec.priority,
              id: this.props.rec.id,
              GoogleId: this.props.rec.GoogleId
            };
  }
            handleChangeText=(event) => {
                this.setState({title: event.target.value});
            }

            handleChangeDesc=(event) => {
                  this.setState({description: event.target.value});
            }

            handleOptionChange =(changeEvent) => {
              this.setState({
                priority: changeEvent.target.value
              });
            }

            handleSubmit=(event) => {

              event.preventDefault()

              this.props.editStream(this.state.id,this.state)

              this.props.toggle();

            }

  render() {

    return (
      <div>
      <Form onSubmit={this.handleSubmit}>

       <FormGroup>
         <Label style={{fontFamily: "Montserrat", fontWeight: "bold"}} for="exampleTitle">Title</Label>
         <Input type="text" name="title" id="exampleTitle" placeholder="Enter a title" style={{fontFamily: "Montserrat"}} value={this.state.title} onChange={this.handleChangeText} required />
       </FormGroup>

       <FormGroup>
         <Label style={{fontFamily: "Montserrat", fontWeight: "bold"}}  for="exampleText">Description</Label>
         <Input type="textarea" name="text" id="exampleText" placeholder="Enter a Description" style={{fontFamily: "Montserrat"}} value={this.state.description} onChange={this.handleChangeDesc} required />
       </FormGroup>


       <FormGroup tag="fieldset">
         <Label style={{fontFamily: "Montserrat", fontWeight: "bold"}} >Priority</Label>

         <FormGroup check>
           <Label check>
             <Input type="radio" name="radio1" value="2" checked={this.state.priority === "2"} onChange={this.handleOptionChange} />{' '}
             <span style={{fontFamily: "Montserrat"}}  > Low </span>
           </Label>
         </FormGroup>

         <FormGroup check>
           <Label check>
             <Input type="radio" name="radio1" value="1" checked={this.state.priority === "1"} onChange={this.handleOptionChange}  />{' '}
              <span style={{fontFamily: "Montserrat"}}  > Middlle </span>
           </Label>
         </FormGroup>

         <FormGroup check>
           <Label check>
             <Input type="radio" name="radio1" value="0" checked={this.state.priority === "0"} onChange={this.handleOptionChange} />{' '}
              <span style={{fontFamily: "Montserrat"}}  > High </span>
           </Label>
         </FormGroup>

       </FormGroup>

        <input type="submit" value="Submit" className="btn" style={{fontFamily: "Montserrat", fontWeight: "bold"}} />
     </Form>
      </div>
    )
  }

  componentDidMount() {

  }
}

const mapStatetoProps=(state) => {
      return { GoogleId: state.auth.id}
}

export default connect(mapStatetoProps,{editStream})(EditFormModel);
