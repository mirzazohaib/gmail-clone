import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://gagadget.com/media/cache/3b/04/3b04d8421ed6cbc77a6616f3b8973234.jpg"
          alt=""
        />
      </div>
      <div className="header_middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
