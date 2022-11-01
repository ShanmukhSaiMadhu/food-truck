import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Search() {
  return (
    <Tooltip title="Search">
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Tooltip>
  )
}

export default Search