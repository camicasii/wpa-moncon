import { LS_USER_KEY } from '../../Const';

const initialState = {
  name: { id: 'name', value: '',  status: '' },
  lastName: { id: 'lastName', value: '',  status: '' },
  email: { id: 'email', value: '',  status: '' },
  mobile: { id: 'mobile', value: '',  status: '' },
  datebirth: { id: 'datebirth', value: '',  status: '' },
  postal: {
 id: 'postal',
    value:{
    address_line_1: '',
    address_line_2: '',
    postal_code: '',
    city: '',
    country: '',
    },
    status:''
  },
  dynamicFields: [],
}

const UserReducer = (state=initialState, action) => {
    let newState; 

//const field = state[action.payload.id] || {}
const { payload } = action

	switch (action.type) {
    
        case 'update':
      console.log(state);
  console.log(action.payload);

const field = {...state[payload.id],...payload}
     newState = {...state, [payload.id]: field }
        	localStorage.setItem(LS_USER_KEY, JSON.stringify(newState));
        	return newState



        case 'add-dynamic-field':
 console.log(state);
  console.log(action.payload);
newState = {...state, dynamicFields: state.dynamicFields.concat(payload) }
localStorage.setItem(LS_USER_KEY, JSON.stringify(newState));

        	return newState

    case 'update-dynamic-field':
 console.log(state);
  console.log(action.payload);
newState = {...state, dynamicFields:  state.dynamicFields.map(field => {
 if (field.id === payload.id) {
    return { ...field, ...payload }
  }
 return field
}) }
localStorage.setItem(LS_USER_KEY, JSON.stringify(newState));
      return newState


    case 'load_store_data':
      return action.payload
        default:
        	return state
    }
}

export default UserReducer
