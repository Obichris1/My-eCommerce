import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import FaCart, { FaCartPlus } from "react-icons/fa";
import "./Navbar.css";
import { auth } from "../Firebase/utils";

const mapState = (state) => ({
  currentUser: state.user.currentUser
});

const Navbar = (props) => {
  const { currentUser } = useSelector( mapState );
 const navigate = useNavigate()
  return (
    <div id="nav">
      <Stack
        sx={{
          height: "100px",
          backgroundColor: "#FFFED0",
        }}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        fontSize="1.5rem"
      >
        <Link to="/">LOGO</Link>

        <Stack direction="row" gap="30px" paddingLeft="00px">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Product</Link>
        </Stack>

        {!currentUser && (
          <Stack direction="row" gap="30px">
            <Link to="/cart" margin="100px">
              <span>
                <FaCartPlus size={30} />
              </span>
            </Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </Stack>
        )}

        {currentUser && <Link onClick={() => auth.signOut()}>LogOut</Link> }
      </Stack>
    </div>
  );
};
Navbar.defaultProps = {
  currentUser: null,
};



export default Navbar;
