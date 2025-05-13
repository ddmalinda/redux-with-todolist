import { applyMiddleware, legacy_createStore as createStore} from 'redux'
// import reducer from './reducers/todoReducer'
// import userReduser from './reducers/userReduser';
import rootReducer from './reducers/rootReducer';
import { thunk } from 'redux-thunk';

//this is store
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;