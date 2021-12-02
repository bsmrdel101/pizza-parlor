import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomerForm() {

  // const [selectedValue, setSelectedValue] = React.useState('');

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Step 2: Customer Information
      </Typography>

      <h5>Total Price: VALUE</h5>

      <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            required
            id="customerName"
            name="customerName"
            label="First name"
            fullWidth
            autoComplete="autofill name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="insert city here"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} >
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Delivery or Pickup?</FormLabel>
            <RadioGroup row aria-label="deliverypickup" name="row-radio-buttons-group">
              <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
              <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Button variant="contained" size="large">Get me closer to 'ZA</Button>
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}