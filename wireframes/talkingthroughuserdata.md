STEP 1 has pizza menu

USER will click on za
outgoing data from Step 1
- added pizzas "pizzas"
  [{id:
    quantity}]
    references pizzas.id
- total price "total"
    references pizzas.price
    building total based on clicked pizzas.price

  - dispatch to cartReducer PIZZAS_PRICE
    {
  type: 'PIZZAS_PRICE',
  payload: {
    total: 27.98,
    pizzas: [{
        "id": "1",
        "quantity": "1"
      },{
        "id": "2",
        "quantity": "1"
  }]
  }
  }]
}

STEP 2 

USER adds name/address/city/zip/radio

"customer_name": "Bob",
  "street_address": "420 Lane",
  "city": "Metropolis",
  "zip": "55555",
  
  "type": "Delivery",

dispatch to cartReducer 
type: 'DOX_CONSUMER',
payload: {
  "customer_name": "Bob",
  "street_address": "1515 ASFAS",
  "zip": "55555",
  "type": "Delivery"
}

Step 3:
import useSelector
const cart = useSelector((store) => store.cartReducer)

cart.customer_name
cart.zip
cart.total

HIT CHECKOUT
- onClick{handleCheckout}
local function that 
in the future we'll use SAGAS
call the prop function submitOrder (from App)
and hand it submitOrder(cart)



EXAMPLE JSON
{
  "customer_name": "Donatello",
  "street_address": "20 W 34th St",
  "city": "New York",
  "zip": "10001",
  "total": "27.98",
  "type": "Pickup",
  "pizzas": [{
    "id": "1",
    "quantity": "1"
  },{
    "id": "2",
    "quantity": "1"
  }]
}