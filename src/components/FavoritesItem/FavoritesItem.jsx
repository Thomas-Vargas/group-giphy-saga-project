import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

// item passed from FavoritesList
const FavoritesItem = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (categoryToPut) => {
    // use category to set category in database
    dispatch({ type: 'PUT_GIPHY', payload: {id: item.id, category: categoryToPut} });
    setAnchorEl(null);
  };

  const handleRemove = () => {
    dispatch({
      type: "DELETE_GIPHY",
      payload: item.id
    })
  }

  return (
    <>
      {/* <img src={item.url} alt="" /> */}
      <div>
        <h1>{item.name}</h1>
        <img src={item.url} alt="" />
      </div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Category
      </Button>
      <Button 
      variant="outlined" 
      color="error"
      onClick={handleRemove}  
      startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* send handleClose the value 'funny' */}
        <MenuItem onClick={() => handleClose(1)}>Funny</MenuItem>
        <MenuItem onClick={() => handleClose(2)}>Cohort</MenuItem>
        <MenuItem onClick={() => handleClose(3)}>Cartoon</MenuItem>
        <MenuItem onClick={() => handleClose(4)}>Nsfw</MenuItem>
        <MenuItem onClick={() => handleClose(5)}>Meme</MenuItem>
      </Menu>
    </>
  );
};

export default FavoritesItem;
