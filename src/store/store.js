import { legacy_createStore as createStore} from 'redux'
// import reducer from './reducers/todoReducer'
// import userReduser from './reducers/userReduser';
import rootReducer from './reducers/rootReducer';

//this is store
const store=createStore(rootReducer);

export default store;