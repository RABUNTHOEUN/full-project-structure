// src/app/layout.tsx
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "My Next.js App",
  description: "Admin Dashboard and Client Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
