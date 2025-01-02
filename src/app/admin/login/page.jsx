"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/admins", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error response:", errorText);
                setMessage("Login failed. Please check your credentials.");
                return;
            }
    
            const data = await response.json();
            if (data.success) {
                setMessage("Login successful!");
                console.log("Logged in user ID:", data.userId);
                router.push("/userlist"); // Redirect to a secure page
            } else {
                setMessage(data.error || "Login failed.");
                console.error("Login failed:", data.error);
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
                    {message && <div className="alert alert-info text-center">{message}</div>}
                    <div className="m-2">
                        <b>Email:</b>
                        <input  type="email" placeholder="Enter Email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="m-2">
                        <b>Password:</b>
                        <input type="password"   placeholder="Enter Password" className="form-control"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="m-2 text-center">
                        <button type="button" className="login px-3" onClick={handleLogin} disabled={isLoading}  >
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                        <button type="reset"  className="reset mx-1 px-3" onClick={handleReset} disabled={isLoading}  > Reset  </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
