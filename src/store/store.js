import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer'
//this is store
const store=createStore(reducer);

export default store;