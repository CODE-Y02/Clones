import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { login, selectUser, logout } from "./features/userSlice";
import { auth } from "./firebaseSetup";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user log out
        dispatch(logout());
      }
    });
  }, []);

  console.log(user);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* <Widgets /> */}
        </div>
      )}
    </div>
  );
}

export default App;
