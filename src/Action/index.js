import history from '../history.js';
import axios from 'axios';

export const signIn = (id,name) => (dispatch) => {
    dispatch({
      type: "SIGN_IN",
      payload: {
        id: id,
        name: name
      }
    })
    history.push('/Streams/list');
}

export const signOut = () =>(dispatch) => {
  dispatch({
    type: "SIGN_OUT",
    payload: {
      id: 0,
      name: ""
    }
  });
  history.push('/');
}

export const fetchStreams =()=>async (dispatch) => {
    const resp = await axios.get("https://nik-api.herokuapp.com/list");
    console.log(resp)
    dispatch({type: 'FETCH_STREAMS',payload: resp.data});
}


export const createStream =(formData)=>async (dispatch) => {


    const resp = await axios.post("https://nik-api.herokuapp.com/list",formData);
    dispatch({type: 'CREATE_STREAM', payload: resp.data});
}


export const deleteStream=(id)=> async (dispatch,getState )=> {

    await axios.delete(`https://nik-api.herokuapp.com/list/${id}`);

    dispatch({ type:'DELETE_STREAM',payload: id})
    history.push('/Streams/list');
}


export const editStream=(id,formValue)=> async (dispatch,getState )=> {

    const resp= await axios.patch(`https://nik-api.herokuapp.com/list/${id}`,formValue);

    dispatch({ type:'EDIT_STREAM',payload: resp.data})
    history.push('/Streams/list');
}
