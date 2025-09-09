export default function CarouselItems({ images, showImage, currentImage, lightbox }) {
    return (
        <div className="gap-2 hidden mt-8 lg:grid lg:grid-cols-4 mx-auto" style={lightbox ? {maxWidth: '25rem', gap: '1.5rem'} : null}>
            { images.map((img, index) => {
                return (
                    <div key={index} className="relative rounded-lg hover:border-orange hover:cursor-pointer group" onClick={() => showImage(index)}>
                        <img src={img.thumbnail} alt={`product thumbnail #${index + 1}`} className="border-[3px] border-transparent rounded-lg group-hover:border-orange" style={currentImage === index ? {borderColor:'#ff7d1a'} : null}/>
                        <div className="bg-white w-full h-full inset-0 opacity-50 absolute rounded-lg hidden group-hover:block border-[3px] border-orange" style={currentImage === index ? {display: 'block'} : null}></div>
                    </div>
                )

            })}
        </div>
    )
}