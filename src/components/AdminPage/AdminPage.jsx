
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import axios from 'axios'


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

// function createData(customerName, orderTime, type, total) {
//   return { customerName, orderTime, type, total };
// }

// const rows = [
//   createData('Donatello', '6:57pm', 'Pickup', '$13.99'),
//   createData('Raphael', '8:09pm', 'Delivery', '$39.79'),
// ];

export default function AdminPage() {

    const dispatch = useDispatch();
  
    const finalOrders = useSelector((store) => store.finalOrders);
  
    // useEffect(() => {
    //     console.log('in useEffect')
    //     getFinalOrders();
    // }, []);

    // const getFinalOrders = () => {
    //     axios({
    //       method: 'GET',
    //       url: '/api/order'
    //     })
    //       .then((response) => {
    //         const order = response.data;
    //         dispatch({
    //           type: 'FINAL_ORDER',
    //           payload: order
    //         })
    //       })
    //   }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="right">Time Order Placed</StyledTableCell>
            <StyledTableCell align="right">Order Type</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalOrders.map((order) => {
            return( <StyledTableRow key={theOrder.id}>
              <StyledTableCell component="th" scope="row">
                {order.customerName}
              </StyledTableCell>
              <StyledTableCell align="right">{order.orderTime}</StyledTableCell>
              <StyledTableCell align="right">{order.type}</StyledTableCell>
              <StyledTableCell align="right">{order.total}</StyledTableCell>
            </StyledTableRow>
          )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

