"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Use Next.js Link for navigation

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            setLoading(true);
            // Simulate sending password reset request (replace with your API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSuccess("A reset link has been sent to your email.");
            setError("");
            // Redirect to login page after 2 seconds
            setTimeout(() => router.push("/auth/login"), 2000);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Forgot Password</h2>
            <p className="text-center mb-6 text-gray-600">Enter your email address to reset your password</p>

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


            <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-4 p-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <Button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                disabled={loading} // Disable button while loading
            >
                {loading ? "Sending..." : "Send Reset Link"}
            </Button>

            <p className="text-center mt-4 text-gray-600">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-700">Log in</Link>
            </p>
        </form>
    );
}
