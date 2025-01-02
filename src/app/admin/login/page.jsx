"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter(); 
    const handleLogin = async () => {
        try {
            const response = await fetch("/api/admins", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
                let  data = await response.json();
            if (response.ok) {
                setMessage("Login successful!");
                console.log("Logged in user ID:", data.userId);
                router.push("/userlist");
         
            } else {
                setMessage(data.error || "Login failed.");
                console.log("Login failed:", data.error);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            console.error("Login error:", error);
        }
    };

    const handleReset = () => {
        setEmail("");
        setPassword("");
        setMessage("");
    };

    return (
        <div className="login_main min-vh-100 d-flex justify-content-center align-items-center">
            <div className="box_Width">
                <div className="login_order p-2">
                    <h3 className="text-center title">Login</h3>
                    {message && (<div className="alert alert-info text-center">{message}</div>)}
                    <div className="m-2">
                        <b>Email:</b>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="m-2">
                        <b>Password:</b>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="m-2 text-center">
                        <button type="button" className="login px-3" onClick={handleLogin}>
                            Login
                        </button>
                        <button type="reset" className="reset mx-1 px-3" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
