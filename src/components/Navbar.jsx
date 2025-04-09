import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-primary text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">🇺🇸 Post 500</h1>
                <div className="space-x-4">
                    {['/', '/about', '/programs', '/events', '/gallery', '/contact', '/members'].map((path, i) => (
                        <Link
                            key={path}
                            to={path}
                            className="hover:text-accent text-sm uppercase font-medium"
                        >
                            {path === '/' ? 'Home' : path.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
