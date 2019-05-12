import React, { Component } from 'react';
import { Router, Route} from "react-router-dom";
import NavbarComponent from './Components/NavbarComponent.js';
import { Container} from 'reactstrap';

import StreamCreate from './Components/Streams/StreamCreate.js';
import StreamEdit from './Components/Streams/StreamEdit.js';
import StreamDelete from './Components/Streams/StreamDelete.js';
import StreamShow from './Components/Streams/StreamShow.js';
import StreamList from './Components/Streams/StreamList.js';
import Home from './Components/Home.js';

import Instruction from './Components/Instruction.js';
import history from './history.js';
import AboutProj from './Components/About.js';

class App extends Component {
  render() {

    return (
      <Router history={history}>

        <Container fluid>

            <NavbarComponent />

              <Route path="/" exact component={Home} />
              <Route path="/Streams/list" exact component={StreamList} />
              <Route path="/Streams/new" exact component={StreamCreate} />
              <Route path="/Streams/edit" exact component={StreamEdit} />
              <Route path="/Streams/delete" exact component={StreamDelete} />
              <Route path="/Streams/show/:id" exact component={StreamShow} />
              <Route path="/Instruction" exact component={Instruction} />
              <Route path="/AboutProj" exact component={AboutProj} />
        </Container>

      </Router>
    );

  }
}

export default App;
