// src/components/Header.tsx
export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-200">About</a></li>
                        <li><a href="#services" className="hover:text-gray-200">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
