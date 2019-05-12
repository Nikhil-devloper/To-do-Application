import React from 'react';
import Google from './Google.js';
import './Home.css';
import bg from './bg.svg';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
            <div className="item1">
              <div className="home-text">
                <span className="home-text-style">
                  Simple <span style={{color: "#1BB1DC"}}>Todo </span> Appliaction made with
                  <p>
                      <span className="home-text-icon">
                        <i className="material-icons md-48">favorite</i>
                      </span >
                  </p>
                  <Google />
                </span>
              </div>
            </div>

            <div className="item2"><img src={bg} alt="pic" className="home-img" /></div>
      </div>
    )
  }
}

export default Home;
