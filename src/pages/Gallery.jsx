import GallerySlider from "../components/GallerySlider";

export default function Gallery() {
    return (
        <section className="p-10 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Photo Gallery</h2>
            <GallerySlider />
        </section>
    );
}
