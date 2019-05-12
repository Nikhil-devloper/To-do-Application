import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Action/index.js';
import _ from 'lodash';
import './StreamList.css';
import ModelComponent from '../ModelComponent.js';
import { deleteStream } from '../../Action/index.js';
import DeleteModel from '../DeleteModel.js';
import EditModel from '../EditModel.js';
import history from '../../history.js';

class StreamList extends React.Component {

  state={
    txtValue: ""
  }

  deleteMe=(id) => {
      this.props.deleteStream(id)
  }

  handleChange=(event) => {
      this.setState({txtValue: event.target.value })
  }


  renderList =(search_string) => {

    let correct_list;

    if(this.state.txtValue===""){
        correct_list=this.props.list;
    }
    else{
        correct_list=_.filter(this.props.list, function(rec) { return (rec.title.includes(search_string)) });
    }

    let Sorted_List= _.sortBy(correct_list,(rec) => rec.priority)


    const list=_.map(Sorted_List,(rec) => {
      if(rec.GoogleId===this.props.GoogleId) {

      let liClassName = foo(rec)

      function foo(rec) {
        if(rec.priority==="0")
          return "high"
        else if(rec.priority==="1")
          return "middle"
        else if(rec.priority==="2")
          return "low"
      }

        return (

          <li key={rec.id} className={`List-item`} onClick={(event) => {
               event.stopPropagation()
               history.push(`/Streams/show/${rec.id}`)
          }
          }>
              <div className={`${liClassName}`}>   </div>
              <div className="rec-title"> {rec.title} </div>

              <div className="ED-btns">
                  <EditModel rec={rec} />
                  <DeleteModel rec={rec}/>
              </div>
          </li>

        )
      }
    })

    return list;
  }

  render() {

      return(
        <div className="StreamList-Container">
            <div className="Heart">

                <div className="Input-And-Buttton">
                <div className="Input-Container">
  <input onChange={this.handleChange} value={this.state.txtValue} className="input-box" placeholder="Search......"/>
                </div>
                <div className="Model-Holder"><ModelComponent/></div>
              </div>
                            <div className="List-holder" >
                                <ul className="List-Container">
                                    {this.renderList(this.state.txtValue)}
                                </ul>
                            </div>
            </div>
        </div>
      );
  }

  componentDidMount() {
      this.props.fetchStreams();
  }
}

const mapStateToProps=(state)=> {
    return {list: state.form,GoogleId: state.auth.id};
}

export default connect(mapStateToProps,{fetchStreams,deleteStream})(StreamList);
