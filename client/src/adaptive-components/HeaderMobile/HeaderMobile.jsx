import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import "./headerMobile.scss";

const HeaderMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contacts" },
  ];

  return (
    <div className="header-mobile-wrapp">
      <p className="title">.Portfolio</p>
      <div className="burger-menu-wrapp">
        <IconButton onClick={handleClick}>
          <MenuIcon className="menu-icon" />
        </IconButton>
      </div>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {menu.map(({ label, path }, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link to={path} className="menu-item-link">
              {label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderMobile;
