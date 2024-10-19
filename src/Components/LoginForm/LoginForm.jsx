import Styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginForm() {

    const loginData = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN", payload: loginData});
        navigate("/");
    }
    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <h1 className={Styles.title}>Register</h1>
                <div className={Styles.inputContainer}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => loginData.name(e.target.value)}
                        required
                        placeholder="name"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => loginData.email(e.target.value)}
                        required
                        placeholder="nombre@example.com"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => loginData.password(e.target.value)}
                        required
                        placeholder="***********"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="remember">Phone</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        onChange={(e) => loginData.phone(e.target.value)}
                        required
                        placeholder="123456789"
                    />
                </div>
                <button type="submit" className={Styles.button}>Login</button>
            </form>
        </div>
    )  
}