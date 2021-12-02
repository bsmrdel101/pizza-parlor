import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

// Table

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(pizzaType, cost) {
    return { pizzaType, cost};
  }
  
  const rows = [
    createData('Onamonapizza', '$14.99'),
    createData('Pepperoni', '$13.99'),
    createData('Cheese', '$10.00'),
  
  ];

// const products = [
// //   {
// //     name: 'Onamonapizza',
// //     desc: 'A nice thing',
// //     price: '$14.99',
// //   },
// //   {
// //     name: 'Pepperoni',
// //     desc: 'Another thing',
// //     price: '$13.99',
// //   },
// //   {
// //     name: 'Cheese',
// //     desc: 'Something else',
// //     price: '$10.00',
// //   },

//   { name: 'Shipping', desc: '', price: 'Free' },
// ];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

function Checkout() {


        return (
            <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Step 3: Checkout
                </Typography>
                <Typography gutterBottom>John Smith</Typography>
                <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={10} sm={9}>
                </Grid>
            </Grid>    
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
            <TableHead>
            <TableRow>
                {/* {products.map((product) => ( */}
                                          <TableCell>Pizza Type</TableCell>
                                          <TableCell align="right">Cost</TableCell>
                                         {/* <ListItem key={product.name} sx={{ py: 1, px: 0 }}> */}
                    {/* {/* <ListItemText primary={product.name} secondary={product.desc} />
                    <Typography variant="body2">{product.price}</Typography>
                </ListItem> 
                ))} */}


                 </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.pizzaType}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.pizzaType}
                        </TableCell>
                        <TableCell align="right">{row.pizzaType}</TableCell>
                        <TableCell align="right">{row.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                    
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            $38.99
                        </Typography>
                        </ListItem>

            </List>
            </Table>
            </TableContainer>
            <Button variant="contained" size="large">Checkout 🍕</Button>
            </React.Fragment>
        );
        
        

}

export default Checkout;