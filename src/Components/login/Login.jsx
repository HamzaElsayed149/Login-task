import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import logo from '../../assets/logo.svg'
import "./Login.scss";

export default function Login() {
    const [email, setEmail] = useState("admin@admin.com");
    const [password, setPassword] = useState("12345678");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const { uid } = useParams();
    function handleSubmit(e) {
        e.preventDefault();

        axios.post(
            `https://one-hand/login?uid=${uid}`,
            { email, password },
            {
                headers: {
                    "X-secret-key": "OH2024",
                },
            }
        )
        if(email  && password ) {
            setCookie("token", "one-hand1234", { path: '/' });
            navigate("/");

        }else{
            console.error("Login failed", );

        }
   
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <img src={logo} alt="" />
                <h2>Log In</h2>
                <div className="input-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
