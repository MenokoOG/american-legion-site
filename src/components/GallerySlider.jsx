import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/images/test1.png",
    "/images/test2.png",
    "/images/test3.png",

];

export default function GallerySlider() {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            className="w-full max-w-4xl mx-auto mt-8"
        >
            {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <img src={img} alt={`Event ${i}`} className="rounded-lg shadow-lg" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
