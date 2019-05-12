import React from 'react';
import './Streams/StreamShow.css';

class AboutProj extends React.Component {

render() {
  return(
    <div className="StreamShow">

      <div className="card-show">
          <div className="icon-handler">
            <div className="real-icon">
              <i className="material-icons Black">play_for_work</i>
            </div>
          </div>
          <div className="card-head-div"> Todo App </div>

          <div className="details">
            <span> Developer:  <b>Nikhil Patil</b> </span>
            <br/>
            <div className="tech"> <b>Technology Used: <br/> </b>
               React Js, Redux, React-Router, reactstrap(React+Bootstrap)
              Node Js(Json Server)
              <br />
              <br />


              <b>Some features: </b> Authentication (Google's Client side authentication),
                    programatic & wildcard navigation, CRUD and Search Operation,Responsive(Mobile)

              </div>
          </div>

      </div>
    </div>
  )
}
}

export default AboutProj;
