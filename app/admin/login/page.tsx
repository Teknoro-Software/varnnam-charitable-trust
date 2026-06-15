"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setLoading(true);

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();

        setLoading(false);

        if (!res.ok) {
            alert(data.message || "Login failed");
            return;
        }

        router.push("/admin/dashboard");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 text-black">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            >
                <div className="mb-6 flex flex-col items-center">
                    <Image
                        src="/logo.png"
                        alt="Varnam Trust"
                        width={90}
                        height={90}
                    />

                    <h1 className="mt-4 text-3xl font-bold">
                        Admin Login
                    </h1>

                </div>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
                    >
                        {loading
                            ? "Signing In..."
                            : "Sign In"}
                    </button>
                </div>
            </form>
        </div>
    );
}