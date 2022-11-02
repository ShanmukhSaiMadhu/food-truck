import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Search() {
  return (
    <Tooltip title="Search">
      <IconButton>
        <SearchIcon size='small' sx={{stroke: '#1D1D1D', height: '24px', width: '24px'}} />
      </IconButton>
    </Tooltip>
  )
}

export default Search