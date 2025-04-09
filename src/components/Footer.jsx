export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto text-center text-sm">
                <p>© {new Date().getFullYear()} American Legion Post 246</p>
                <p className="text-gray-400 mt-1">Proudly Serving Our Veterans and Community</p>
            </div>
        </footer>
    );
}
