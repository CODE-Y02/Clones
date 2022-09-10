import React from "react";
import "./Login.css";
import logo from "./assets/linkedin.png";
import { auth } from "./firebaseSetup";
import { useState } from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux/es/exports";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = async (e) => {
    e.preventDefault();
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  // const loginToApp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userAuth = await auth.signInWithEmailAndPassword(email, password);

  //     dispatch(
  //       login({
  //         email: userAuth.user.email,
  //         uid: userAuth.user.uid,
  //         displayName: userAuth.user.displayName,
  //         profileUrl: userAuth.user.photoURL,
  //       })
  //     );
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const register = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <div className="login">
        <img src={logo} alt="logo linkedin" />

        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name (Required if registering)"
            type="text"
          />
          <input
            placeholder="Profile picture url (optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin_btn" onClick={loginToApp}>
            Sign In{" "}
          </button>
        </form>

        <p>
          Not a member ?{" "}
          <span className="login__register" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
