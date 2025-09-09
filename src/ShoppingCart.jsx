export default function ShoppingCart({ product, priceOnSale, isVisible, cartItems, resetCart }) {
    const price = priceOnSale || product.price;
    const totalPrice = (price * cartItems).toFixed(2);
    return (
        <div className="bg-white rounded-sm absolute max-w-lg mx-auto h-fit inset-y-22 inset-x-4 shadow-2xl lg:w-sm lg:inset-y-16 lg:start-auto" style={ !isVisible ? {display: 'none'} : null }>
            <h3 className="text-blue-dark font-bold p-5 border-b-2 border-blue-grayish-light">Cart</h3>
            {cartItems 
                ? <div className="px-8 py-6 ">
                    <div className="flex gap-6 text-blue-grayish-dark items-center text-lg">
                        <img src={product.images[0].thumbnail} alt="" className="w-16 rounded-md"/>
                        <div>
                            <p>{product.info.title}</p>
                            <p>${priceOnSale} x {cartItems} <span className="font-bold text-blue-dark">${totalPrice}</span></p>
                        </div>
                        <svg className="ml-auto group hover:cursor-pointer" onClick={resetCart} width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path className="group-hover:fill-orange" d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a"/></svg>
                    </div>
                    <button className="flex items-center justify-center bg-orange p-4 rounded-md mt-6 mb-2 w-full hover:opacity-75 hover:cursor-pointer shadow-[#ff7d1a94] shadow-lg text-blue-dark font-bold" onClick={() => window.location.reload()}>Checkout</button>
                </div> 
                : <p className="text-center font-bold text-blue-grayish-dark p-20">Your cart is empty.</p>
            }
        </div>
    )
}