// Login.jsx
import React, { useEffect, useRef, useState } from "react";
import HomeLogin from "../HomeLogin";
import { SHA256 } from "crypto-js";
import './Login.scss';

function Index() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const localSignUp = sessionStorage.getItem("signUp");
    const localEmail = sessionStorage.getItem("email");
  
    useEffect(() => {
        if (localSignUp || localEmail) {
          setShowHome(true);
        }
      }, [localSignUp, localEmail]);

    const handleSignIn = async () => {
        try {
          const response = await fetch("http://localhost:3001/usuarios");
      
          if (!response.ok) {
            throw new Error("Error fetching user data");
          }
      
          const userData = await response.json();
        //   console.log("userData:", userData);
      
          if (Array.isArray(userData) && userData.length > 0) {
            const user = userData.find(
              (u) => u.email.toLowerCase() === email.current.value.toLowerCase()
            );
            // console.log("user:", user);
      
            if (user) {
                alert("Seja Bem vindo");
                sessionStorage.setItem("email", user.email);
                sessionStorage.setItem("name", user.name);
                setShowHome(true)
            } else {
              alert("User not found");
            }
          } else {
            alert("No users found");
          }
        } catch (error) {
          console.error("Error signing in:", error);
          alert("Error signing in");
        }
      };
  
  const handleClick = async () => {
    if (name.current.value && email.current.value && password.current.value) {
      try {
        const hashedPassword = SHA256(password.current.value).toString();
  
        const response = await fetch("http://localhost:3001/usuarios");
        if (!response.ok) {
          throw new Error("Error fetching user data");
        }
  
        const userData = await response.json();
  
        const userExists = userData?.usuarios?.some(
          (user) => user.email.toLowerCase() === email.current.value.toLowerCase()
        );
  
        if (userExists) {
          setShow(true);
          return;
        }
  
        const newUser = {
          name: name.current.value,
          email: email.current.value,
          password: hashedPassword,
        };
  
        const postResponse = await fetch("http://localhost:3001/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
  
        if (!postResponse.ok) {
          throw new Error("Error creating user");
        }
  
        sessionStorage.clear();
        sessionStorage.setItem("hashedPassword", hashedPassword);
        sessionStorage.setItem("isLoggedIn", "true");
  
        alert("Account created successfully!!");
        setShowHome(true);
      } catch (error) {
        console.error("Error creating user:", error);
        alert("Error creating user");
      }
    } else {
      alert("Fill in all required fields");
    }
  };
  

  const switchToSignIn = () => {
    setShow(true);
  }

  return (
    <div className="Login">
    {showHome ? (
            <HomeLogin />
        ) : (
            show ?  (
                <div className="container">
                    <h2>Login</h2>
                <div className="input_space">
                    <input placeholder="Email" type="text" ref={email} />
                </div>
                <div className="input_space">
                    <input placeholder="Password" type="password" ref={password} />
                </div>
                <button onClick={handleSignIn}>Sign In</button>
                <p>Don't have an account? <span onClick={() => setShow(false)}>Sign Up</span></p>
                </div>
            ) : (
                <div className="container">
                    <h2>Singup</h2>
                <div className="input_space">
                    <input placeholder="Name" type="text" ref={name} />
                </div>
                <div className="input_space">
                    <input placeholder="Email" type="text" ref={email} />
                </div>
                <div className="input_space">
                    <input placeholder="Password" type="password" ref={password} />
                </div>
                <button onClick={handleClick}>Sign Up</button>
                <p>Already have an account? <span onClick={switchToSignIn}>Sign In</span></p>
                </div>
            )
        )}
    </div>
  );
}

export default Index;