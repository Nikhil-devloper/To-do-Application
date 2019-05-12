import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';

class StreamCreate extends React.Component {
    state = {
              title: '',
              description: '',
              priority:"2"
            };

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

              event.preventDefault();
              var formValue={...this.state,GoogleId: this.props.GoogleId}
              this.props.oneMore(formValue);
              this.props.toggle();

            }

  render() {

    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
       <FormGroup>
         <Label style={{fontFamily: "Montserrat", fontWeight: "bold"}} for="exampleTitle">Title</Label>
         <Input type="text" name="title" id="exampleTitle" placeholder="Enter a title" style={{fontFamily: "Montserrat"}} value={this.state.txtValue} onChange={this.handleChangeText} required />
       </FormGroup>

       <FormGroup>
         <Label style={{fontFamily: "Montserrat", fontWeight: "bold"}}  for="exampleText">Description</Label>
         <Input type="textarea" name="text" id="exampleText" placeholder="Enter a Description" style={{fontFamily: "Montserrat"}} value={this.state.descriptionValue} onChange={this.handleChangeDesc} required />
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
}

const mapStatetoProps=(state) => {
      return { GoogleId: state.auth.id}
}

export default connect(mapStatetoProps)(StreamCreate);
