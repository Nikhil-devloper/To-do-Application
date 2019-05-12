import _ from 'lodash';


export const ListReducer=(state={},action) => {

    switch (action.type) {

        case 'FETCH_STREAMS':
        return {...state,..._.mapKeys(action.payload,(value)=> value.id)}

        case 'CREATE_STREAM':
          return {...state,[action.payload.id]: action.payload}

        case 'EDIT_STREAM':
            return {...state,[action.payload.id]: action.payload}

        case 'DELETE_STREAM':
          const new_state=_.omit(state,[action.payload])
          return new_state;


        default:
          return state;
    }

}
