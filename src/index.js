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
    const ordersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FINAL_ORDER':
            console.log('in ordersReducer');
            return action.payload;
        default:
            return state;
    }
}



    const cartReducer = (state = [{
      "customer_name": "",
      "street_address": "",
      "city": "",
      "zip": "",
      "total": "",
      "type": "",
      "pizzas": [{
        "id": "",
        "quantity": "1"
      },{
        "id": "",
        "quantity": "1"
      }]
    }], action) => {
    switch(action.type) {
        case 'PIZZAS_PRICE':
            return [{...state,
                    "total": action.payload.price,
                    "pizzas": action.payload.pizzas
                }];
        case 'DOX_CONSUMER':
            return [{...state,
                    "customer_name": action.payload.name,
                    "street_address": action.payload.address,
                    "city": action.payload.city,
                    "zip": action.payload.zip,
                    "type": action.payload.type
            }];
        default:
            return state;

    }
}


const storeInstance = createStore(
  combineReducers({
      pizzaReducer,
      ordersReducer,
      cartReducer
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
