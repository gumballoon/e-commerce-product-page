import { useState } from "react"
import CarouselItems from "./CarouselItems";

export default function Carousel({ images, toggleCarouselDesktop, lightbox }) {
    const [currentImage, setCurrentImage] = useState(0);

    function nextImage() {
        return setCurrentImage((oldImage) => (oldImage + 1) % images.length);
    }

    function previousImage(){
        return setCurrentImage((oldImage) => (oldImage - 1) % images.length);
    }

    function showImage(index) {
        return setCurrentImage(index);
    }

    return (
        <div>
            <div className="relative flex items-center justify-center lg:flex-col lg:items-center lg:max-w-xl mx-auto">
                <svg className="ml-auto mb-4 group hover:cursor-pointer" style={lightbox ? { display:'block' } : null} onClick={() => toggleCarouselDesktop()} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-orange" d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd"/>
                </svg>
                <img src={images[Math.abs(currentImage)].main} alt="product main image" className="mx-auto max-w-xl lg:rounded-xl lg:max-w-md hover:cursor-pointer" style={lightbox ? {maxWidth: '36rem'} : null} onClick={() => !lightbox && toggleCarouselDesktop()}/>
                <div className="absolute px-5 w-full flex" style={lightbox ? {padding: 0, width:'110%'} : null}>
                    <button type="button" className="bg-white w-12 h-12 rounded-full flex items-center justify-center group hover:cursor-pointer lg:hidden" style={lightbox ? {display: 'flex'} : null} onClick={previousImage}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className="hover:stroke-orange group-hover:stroke-orange" d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                    <button type="button" className="bg-white w-12 h-12 rounded-full flex items-center justify-center ml-auto group hover:cursor-pointer lg:hidden"  style={lightbox ? {display: 'flex'} : null} onClick={nextImage}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className="hover:stroke-orange group-hover:stroke-orange" d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                    <button type="button"></button>
                </div>
            </div>
            < CarouselItems images={images} showImage={showImage} currentImage={currentImage} lightbox={lightbox}/>
        </div>
    )
}