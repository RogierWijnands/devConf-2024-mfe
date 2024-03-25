import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./App.scss";
import { ShoppingCart, AccountBox } from "@mui/icons-material";

export default function () {
  const sampleData = ["Kawasaki", "Yamaha", "BMW"];

  return (
    <div className="top-nav-container flex">
      <strong className="display-inline ml-10">Home</strong>
      <strong className="display-inline ml-3p">About Us</strong>
      <strong className="display-inline ml-3p">Contact</strong>
      <Autocomplete
        className="display-inline search-container"
        disablePortal
        id="combo-box-demo"
        options={sampleData}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search items on this site" />
        )}
      />
      <strong className="display-inline ml-3p">
        <AccountBox className="mr-10" />
        Sign In
      </strong>
      <strong className="display-inline ml-3p">
        <ShoppingCart className="mr-10" />
        Cart
      </strong>
    </div>
  );
}
