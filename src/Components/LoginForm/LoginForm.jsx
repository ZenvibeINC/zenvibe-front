import Styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <h1 className={Styles.title}>Login</h1>
                <div className={Styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="***********"
                    />
                </div>
                <button type="submit" className={Styles.button}>Login</button>
            </form>
        </div>
    )  
}