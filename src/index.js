import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//REDUX HOOKS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

//Three Reducers, or Four?

  // 1. pizza data from server/db for Pizza page
  // takes 1Arg is previous state, 2arg is ACTION, returns NEXTstate
  const pizzaReducer = (state = [], action) => {
    switch(action.type) {
        case 'HOT_PIZZA_HERE':
            return action.payload;
        default:
            return state;
    }
}

  // 2. orders data from server/db for admin page
  //   const ordersReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'PLACEHOLDER_SCREAM':
//             return action.payload;
//         default:
//             return state;
//     }
// }


  // 3. The outgoing order being built by client. THE CART
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
      pizzaReducer,
      // orders,
      // line_item,
      // cart
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
