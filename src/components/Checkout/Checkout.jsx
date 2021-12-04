import * as React from 'react';
import './Checkout.css';

//useHistory
import {useHistory} from 'react-router-dom';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// Table

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

    function Checkout() {

      const history = useHistory();

      const cartReducer = useSelector(store => store.cartReducer);
      const pizza = useSelector(store => store.pizzaReducer);
      const order = useSelector(store => store.ordersReducer);

      const submitOrder = () => {
          axios({
              method: "POST",
              url: "/api/order",
              data: {
                  customer_name: pizza.customer_name,
                  street_address: pizza.street_address,
                  city: pizza.city,
                  zip: pizza.zip,
                  type: pizza.type,
                  total: order.total,
                  pizzas: pizza.pizzas,
              }
          })
              .then((response) => {
                console.log('order details', response);
                  dispatch({
                      type: 'PIZZAS_PRICE',
                  })
              })
              .catch((error) => {
                  console.log("error on POST", error);
              });
      };

        return (

          <React.Fragment>

                <div>
                <header className='CheckoutHeader'>
                  <h1 className='title'>Prime Pizza</h1>
                </header>
                </div>

            <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Step 3: Checkout
                    </Typography>
                    <Typography gutterBottom>{cart.name}</Typography>
                    <Typography gutterBottom>{order.addresses.join(', ')}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={10} sm={9}></Grid>
            </Grid>  

                <TableContainer component={Paper}>
                  <div ClassName='designTable'>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table" align="center">
                      <div className='Border'>
                          <Typography variant="h4" gutterBottom>Order Summary</Typography>
                      </div>

                  <List disablePadding>

                  <TableHead>
                        <TableRow>
                              <StyledTableCell align="center">Order</StyledTableCell>
                              <StyledTableCell align="right">Type</StyledTableCell>
                              <StyledTableCell align="center">Price</StyledTableCell>
                        </TableRow>
                  </TableHead>

                  <TableBody>
                      {cartReducer.map((row) => (
                    <StyledTableRow key={row.pizzaType} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} component="th" scope="row">

                          <StyledTableCell align="center" f>{row.pizza.pizzaType}</StyledTableCell>
                          <StyledTableCell align="center">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.orderTime}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="center">{row.Price}</StyledTableCell>

                        </StyledTableRow>
                          ))}
                  </TableBody>

                  <TableRow><TableCell></TableCell></TableRow>
                    <ListItem sx={{ py: 4, px: 4 }}>
                    <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>$38.99</Typography>
                    </ListItem>

                  </List>
                </Table>
                </div>
              </TableContainer>
                  <div className="test">
                    <Button onClick={submitOrder} variant="contained" size="medium">Checkout 🍕</Button>
                  </div>
            </React.Fragment>
        );
};

export default Checkout;