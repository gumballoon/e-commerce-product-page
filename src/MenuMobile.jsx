export default function MenuMobile({ isVisible, closeMenuMobile }) {
    return (
        <div className="absolute inset-0 w-full h-full bg-black-opacity-75 lg:hidden" style={ !isVisible ? {display: 'none'} : null }>
            <div className="bg-white w-[50%] h-full p-7 text-[1.25rem] font-bold text-blue-dark">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="hover:cursor-pointer" onClick={closeMenuMobile} role="button" aria-label="Close navigation menu">
                    <path className="hover:fill-orange" d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
                </svg>

                <p className="mt-14 mb-7 hover:text-blue-grayish hover:cursor-pointer">Collections</p>
                <p className="mb-7 hover:text-blue-grayish hover:cursor-pointer">Men</p>
                <p className="mb-7 hover:text-blue-grayish hover:cursor-pointer">Women</p>
                <p className="mb-7 hover:text-blue-grayish hover:cursor-pointer">About</p>
                <p className="mb-7 hover:text-blue-grayish hover:cursor-pointer">Contact</p>
            </div>
        </div>
    )
}