export default function Home() {
    return (
        <section className="relative bg-gradient-to-b from-primary to-blue-900 text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                    Welcome to American Legion Post 246
                </h1>
                <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                    Honoring our veterans. Strengthening our community. Serving with pride and purpose.
                </p>
                <a
                    href="/about"
                    className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
                >
                    Learn More About Us
                </a>
            </div>
        </section>
    );
}
