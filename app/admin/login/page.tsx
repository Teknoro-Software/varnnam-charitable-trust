"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-xl shadow w-full max-w-md space-y-4">
                <h1 className="text-3xl font-bold">
                    Admin Login
                </h1>

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full border p-3 rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-[#c62828] text-white py-3 rounded">
                    Sign In
                </button>
            </form>
        </div>
    );
}