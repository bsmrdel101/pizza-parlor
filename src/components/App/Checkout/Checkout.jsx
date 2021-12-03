import * as React from 'react';
import './Checkout.css';
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

function createData(pizzaType, description, orderTime, type, Price) {
    return { pizzaType, description, orderTime, type, Price};
  }
  
  const rows = [
    createData('Onamonapizza', '"We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you""ll SMACK your lips."' , '6:57pm', 'Pickup', '$14.99'),
    createData('Pepperoni', 'Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.' , '8:09pm', 'Delivery', '$13.99'),
    createData('Over the Rainbow', 'Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.' , '8:30pm', 'Pickup', '$10.00'),
  
  ];

const addresses = ['555 Applewood Lane', 'Minneapolis', 'MN'];


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
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
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
                              <StyledTableCell align="center">Description</StyledTableCell>
                              <StyledTableCell align="right">Time</StyledTableCell>
                              <StyledTableCell align="right">Type</StyledTableCell>
                              <StyledTableCell align="center">Price</StyledTableCell>
                        </TableRow>
                  </TableHead>

                  <TableBody>
                      {rows.map((row) => (
                    <StyledTableRow key={row.pizzaType} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} component="th" scope="row">

                          <StyledTableCell align="center" f>{row.pizzaType}</StyledTableCell>
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

                    <Button variant="contained" size="medium">Checkout 🍕</Button>

            </React.Fragment>
        );
        
        

}

export default Checkout;