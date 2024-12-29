// src/pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = JSON.parse(req.body);

        // Replace with actual user validation logic
        if (email === "admin@example.com" && password === "password") {
            res.setHeader("Set-Cookie", `token=valid-token; Path=/; HttpOnly`);
            return res.status(200).json({ message: "Login successful" });
        }

        return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(405).json({ message: "Method not allowed" });
}
