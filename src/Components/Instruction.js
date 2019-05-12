import React from 'react';
import "./Instruction.css";
import Typist from 'react-typist';


class Instruction extends React.Component {

  state ={
    animateCount: 1
  }

  render() {

    return (
        <div className="Instruction-Container">

          <div className="card-div">
              <div className="card-div-child">

                  <div className="icon-container">
                      <div className="icon-background">
                        <i className="material-icons Black">play_for_work</i>
                      </div>
                  </div>
                  <div className="card-div-head"> Instruction </div>

                  <div className="card-div-text">

                        <Typist>
                          1]  Log In to your Google Account  <br />
                          2] Click create button to create task. <br />
                          3]  You can edit, delete or view task any time <br /><br />
                          

                        </Typist>
                  </div>

              </div>
          </div>

        </div>
    )
  }
  componentDidMount() {

  }

}

export default Instruction;
