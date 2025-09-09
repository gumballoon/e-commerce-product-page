import Carousel from "./Carousel"

export default function CarouselDesktop({ isVisible, toggleCarouselDesktop, images }) {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-black-opacity-75 hidden lg:flex flex-col justify-center items-center" style={!isVisible ? {display: 'none'} : null}>
            < Carousel images={images} toggleCarouselDesktop={toggleCarouselDesktop} lightbox={true}/>
        </div>
    )
}