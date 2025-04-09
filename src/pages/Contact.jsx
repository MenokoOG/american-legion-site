export default function Contact() {
    return (
        <section className="p-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
            <form className="space-y-4">
                <input className="w-full border p-2 rounded" placeholder="Your Name" />
                <input className="w-full border p-2 rounded" placeholder="Email Address" />
                <textarea className="w-full border p-2 rounded" placeholder="Your Message" />
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-patriot">Send</button>
            </form>
        </section>
    );
}
