import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

// item passed from FavoritesList
const FavoritesItem = (item) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    console.log(category);
    // use category to set category in database 

    setAnchorEl(null);
  };

  return (
    <>
      {/* <img src={item.url} alt="" /> */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* send handleClose the value 'funny' */}
        <MenuItem onClick={() => handleClose('funny')}>Funny</MenuItem>
        <MenuItem onClick={() => handleClose('cohort')}>Cohort</MenuItem>
        <MenuItem onClick={() => handleClose('cartoon')}>Cartoon</MenuItem>
        <MenuItem onClick={() => handleClose('nsfw')}>Nsfw</MenuItem>
        <MenuItem onClick={() => handleClose('meme')}>Meme</MenuItem>
      </Menu>
    </>
  )
}

export default FavoritesItem;