import React from 'react';
import axios from 'axios';
import './StreamShow.css';

class StreamShow extends React.Component {

  state = {
      rec: null
  }

  render() {


    let obj=this.state;

    if(obj.rec!==null) {

      return (
        <div className="StreamShow">

          <div className="card-show">
              <div className="icon-handler">
                <div className="real-icon">
                  <i className="material-icons Black">play_for_work</i>
                </div>
              </div>
              <div className="card-head-div"> Task </div>

              <div className="title">
                  <span> {obj.rec.title} </span>
              </div>

              <div className="description">
                <p>  {obj.rec.description} </p>
              </div>

          </div>
        </div>
      )
    }
    else {
      return <div> Loading...  </div>;
    }
  }

  async componentDidMount() {
        const resp= await axios.get(`https://nik-api.herokuapp.com/list/${this.props.match.params.id}`)
        this.setState({rec: resp.data})
  }
}

export default StreamShow;
