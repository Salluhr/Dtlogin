import React from "react";

import "./login.css";
import { useNavigate } from "react-router-dom";

function Registration() {

    const navigateTo = useNavigate();

    const validateFname = () => {
        let fname = document.getElementById("fname").value;
        let fdiv = document.getElementById("fdiv");
        let fout = document.getElementById("fout");

        if (fname.trim().length === 0) {
            fout.innerText = "Please Enter FirstName";
            fdiv.classList.add("has-error");
        } else {
            fout.innerText = "";
            fdiv.classList.remove("has-error");
            fdiv.classList.add("has-success");
        }
    };

    function validateEmail() {
        let email = document.getElementById("email").value;
        if (email.trim().length === 0) {
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
        if (pwd.type === "password") {
            pwd.type = "text";
        } else {
            pwd.type = "password";
        }
    }

    const validateCPass = () => {
        let pwd = document.getElementById("pwd").value;
        let cpwd = document.getElementById("cpwd").value;
        if (pwd !== cpwd) {
            document.getElementById("cpout").innerText = "Password Does Not Match";
        } else {
            document.getElementById("cpout").innerText = "";
        }
    };

    const validatenumber = () => {
        let mob = document.getElementById("mob").value;
        if (mob.trim().length < 10) {
            // document.getElementById('pout').innerText = "Min length is 10"
            document.getElementById("mout").innerText =
                "Please enter valid mobile number";
        } else {
            document.getElementById("mout").innerText = "";
        }
    };

    const getCity = () => {
        let city = document.getElementById("country").value;
        document.getElementsByTagName(
            "span"
        )[1].innerText = `You have selected ${city}`;
    };

    return (
        <div>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Registration Page</h4>
                    </div>
                    <div className="panel-body">
                        <form action method="POST">
                            <div className="form-group" id="fdiv">
                                <label htmlFor="firstname" className="control-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="Enter Your Full Name"
                                    className="form-control"
                                    id="fname"
                                    onBlur={() => validateFname()} />
                                <p id="fout" />
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onInput={() => validateEmail()}
                                    />
                                    <p id="eout" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Mobile Number</label>
                                    <input
                                        type="number"
                                        name="mob"
                                        className="form-control"
                                        id="mob"
                                        onInput={() => validatenumber()}
                                    />
                                    <p id="mout" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="pwd"
                                        className="form-control"
                                        id="pwd"
                                        onInput={() => validatePass()}
                                    />
                                    <span
                                        className="glyphicon glyphicon-eye-open"
                                        onClick={() => showPassword()}
                                    />
                                    <p id="pout" />
                                    <div id="ppout" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="cpwd"
                                        className="form-control"
                                        id="cpwd"
                                        onInput={() => validateCPass()}
                                    />
                                    <p id="cpout" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <select
                                    className="form-control"
                                    name="country"
                                    id="country"
                                    onChange={() => getCity()}
                                >
                                    <option>India</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                                <span />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <button type="submit" className="btn btn-success paras" onClick={() => { navigateTo('/login') }}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;
