"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        try {
            // Simulate the registration process (replace with API logic)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSuccess("Registration successful!");
            setError("");
            // Redirect to login page after 2 seconds
            setTimeout(() => router.push("/auth/login"), 2000);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Register</h2>
            <p className="text-center mb-6 text-gray-600">Create a new account</p>

            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertTitle className="text-red-600">Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert variant="default" className="mb-4 bg-green-100 border-green-600 text-green-700">
                    <AlertTitle className="text-green-600">Success</AlertTitle>
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}

            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">Username</label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                Register
            </Button>

            <p className="text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <a href="/auth/login" className="text-blue-600 hover:text-blue-700">Log in</a>
            </p>
        </form>
    );
}
