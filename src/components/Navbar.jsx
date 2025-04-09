import { Link, useLocation } from "react-router-dom";

const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
    { path: "/members", label: "Members" },
];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide uppercase">
                    Post 246
                </h1>
                <div className="space-x-4 text-sm font-medium">
                    {links.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`hover:text-accent ${location.pathname === path ? "text-accent underline" : ""
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
