import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import LogoutButton from "./auth/LogoutButton";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins";
  font-size: 18px;
  line-height: 27px;
  background-color: rgb(2, 2, 20);
`;

const NavText = styled.p`
  color: white;
  text-decoration: none;
  underline: none;
  padding-bottom: 3px;
  z-index: 1;
  &:visited {
    color: white;
    cursor: pointer;
  }
  &:hover {
    border-bottom: 3px solid white;
    padding-bottom: 0px;
  }
`;

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <NavContainer>
      <NavText>
        <NavLink
          to="/"
          style={{ color: "white", textDecoration: "none", underline: "none" }}
          exact={true}
          activeClassName="active"
        >
          Home
        </NavLink>
      </NavText>
      <NavText>
        <NavLink
          to="/login"
          style={{ color: "white", textDecoration: "none", underline: "none" }}
          exact={true}
          activeClassName="active"
        >
          Login
        </NavLink>
      </NavText>
      <NavText>
        <NavLink
          to="/sign-up"
          style={{ color: "white", textDecoration: "none", underline: "none" }}
          exact={true}
          activeClassName="active"
        >
          Sign Up
        </NavLink>
      </NavText>
      <NavText>
        <NavLink
          to="/users"
          style={{ color: "white", textDecoration: "none", underline: "none" }}
          exact={true}
          activeClassName="active"
        >
          Users
        </NavLink>
      </NavText>
      {user && <LogoutButton />}
    </NavContainer>
  );
};

export default NavBar;
