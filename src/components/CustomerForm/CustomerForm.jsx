import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

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
  //Will need localState for the form elements
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  // const [radio, setRadio] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleButton = () => {
    dispatchEvent({
      type: 'DOX_CONSUMER',
      payload: {
        "customer_name": {name},
        "street_address": {address},
        "city": {city},
        "zip": {zip},
        "type": "delivery"
      }
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Step 2: Customer Information
      </Typography>

      <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            onChange={handleNameChange}
            type='text'
            value={name}
            //value
            //onChange
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
            onChange={handleAddressChange}
            type='text'
            value={address}
            //value
            //onChange
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
            onChange={handleCityChange}
            type='text'
            value={city}
            //value
            //onChange
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
            onChange={handleZipChange}
            type='text'
            value={zip}
            //value
            //onChange
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
          <Button onClick={handleButton} variant="contained" size="large">Get me closer to 'ZA 🍕</Button>
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}