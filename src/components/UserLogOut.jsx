import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { auth } from "/src/API/firebase";
import { userActions } from "../store";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";


function UserLogOut({user}) {
  const dispatch = useDispatch();
  const { userId, email } = useParams();
  const navigate = useNavigate();

  console.log(userId);

    const handleLogout = () => {
      auth.signOut()
      .then(() => {
          console.log('signout');
          dispatch(userActions.logout());
      })
      .catch((error) => {
          console.log(error);
      });
    };

    const handleEditUser = () => {
      dispatch(userActions.updateUser({userId, name, email}));
      navigate(`/update/${userId}`);
    };
    
  return (
    <div>
      <NavDropdown title="User Page" id="basic-nav-user">
      <NavDropdown.Header>Welcome, {user.name}!</NavDropdown.Header>
      <NavDropdown.Item href="#action/3.1" onClick={handleEditUser} >UpDate</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#" onClick={handleLogout}>LogOut</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default UserLogOut;
