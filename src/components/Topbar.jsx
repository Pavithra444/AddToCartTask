import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Topbar() {
 
 
  return <div className='TopBar'>
   <div className='cont1'>
    <button variant="contained">Home</button>
    <button>About</button>
   <Select
        labelId="dropdown-label"
        
        label="Select Option"
      >
        <MenuItem value={10}>All Products</MenuItem>
        <Divider></Divider>
        <MenuItem value={20}>Popular Items</MenuItem>
        <MenuItem value={30}>New Arrivals</MenuItem>
        
      </Select>
      <div>
     
    </div>
      </div>
  </div>;
}

export default Topbar;
