
export const metadata = {
    title: "Authentication - My App",
    description: "Forgot Password - My App",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-svh">
            <div className="text-center py-6 bg-blue-600 text-white">
                <h1 className="text-2xl font-bold">Welcome to My App</h1>
                <p className="text-gray-100 ">Please sign in or create an account</p>
            </div>
            <main>{children}</main>
        </div>
    );
}
