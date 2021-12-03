import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//REDUX HOOKS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Three Reducers, or Four?

//   1. pizza data from server/db for Pizza page
//   const pizzaReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'PLACEHOLDER_SCREAM':
//             return action.payload;
//         default:
//             return state;
//     }
// }

  // 2. orders data from server/db for admin page
  //   const ordersReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'PLACEHOLDER_SCREAM':
//             return action.payload;
//         default:
//             return state;
//     }
// }


  // 3 line_item data from server/db
//   const ???Reducer = (state = [], action) => {
//     switch(action.type) {
//         case 'PLACEHOLDER_SCREAM':
//             return action.payload;
//         default:
//             return state;
//     }
// }


  // 4. The outgoing order being built by client. THE CART
  //   const ?!?!Reducer = (state = [], action) => {
//     switch(action.type) {
//         case 'PLACEHOLDER_CART_SCREAM':
//             return action.payload;
//         default:
//             return state;

//     }
// }


const storeInstance = createStore(
  combineReducers({
      pizza,
      orders,
      line_item,
      cart
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
