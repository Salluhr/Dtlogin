import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Mypage() {
  const navigateTo = useNavigate();

  function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.trim().length == 0) {
      document.getElementById("eout").innerText = "Please Enter Email Id";
    } else {
      if (
        email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$") == null
      ) {
        document.getElementById("eout").innerText = "Please Enter Valid Email";
      } else {
        document.getElementById("eout").innerText = "";
      }
    }
  }

  const validatePass = () => {
    let pwd = document.getElementById("pwd").value;
    if (pwd.trim().length < 15) {
      if (pwd.trim().length < 8) {
        document.getElementById("pout").innerText =
          "Please enter valid password";
        document.getElementById("ppout").style.display = "block";
        document.getElementById("ppout").style.backgroundColor = "red";
      } else if (pwd.trim().length < 11) {
        document.getElementById("pout").innerText = "";
        document.getElementById("ppout").style.backgroundColor = "orange";
      }
    } else {
      document.getElementById("ppout").style.backgroundColor = "green";
    }
  };

  function showPassword() {
    let pwd = document.getElementById("pwd");
    if (pwd.type == "password") {
      pwd.type = "text";
    } else {
      pwd.type = "password";
    }
  }

  return (
    <>
      <div id="container">
        <div className="mainlabel">
          <label>Login </label>
        </div>
<div id="maindiv">
        <div id="content">
          {/* first div */}
          <div className="lab">
            <div className="lab1"><label className="design">Email</label></div>
            <div className="lab2"><input  type="text" name="email" id="email" onInput={() => validateEmail()}/></div>
            <div className="lab3"><p id="eout" /></div>
          </div>
      
          <div className="lab">
            <div className="lab1"><label className="design">Password</label></div>
            <div className="lab2"><input  type="password"  name="pwd" id="pwd" onInput={() => validatePass()} /></div>
            <div className="lab4"><span className="glyphicon glyphicon-eye-open " onClick={() => showPassword()}></span></div>
            <div className="lab3">
                <p id="pout" />
                <p id="ppout"></p>
            </div>
          </div>

          <div id="forg">
            <button >Forgot Password</button>
          </div>

          <div className="paras">
              <div className="newu"><span className="design">New User</span></div>
              <div className="forgpas"><button onClick={() => {navigateTo("/registration"); }} >
                Register
              </button></div>
          </div>

          <div className="log-but">
            <div className="log-but-1">
              <button type="submit" className="btn btn-success  ">
                Login
              </button>
            </div>
            <div className="log-but-1">
              <button className="btn btn-danger ">Cancel</button>
            </div>
           
          </div>
          
      </div>

        <div id="imgdiv">
             <img src="https://i.ibb.co/CKBJV7N/attari-pic.png" />
        </div>
      </div>
      </div>
    </>
  );
}
export default Mypage;
