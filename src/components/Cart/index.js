import React from 'react'
import './styles.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Cart() {
  return (
    <Tooltip title="Cart">
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>
  )
}

export default Cart