import { useState } from "react";
import iconMinus from './assets/icon-minus.svg';
import iconPlus from './assets/icon-plus.svg';

export default function QuantityButton({ stock, addToCart }) {
    const [count, setCount] = useState(0);

    function updateCount(num) {
        if (count + num >= 0 && count + num <= stock) {
            return setCount((oldCount) => oldCount + num)
        }
    }

    function handleClick() {
        addToCart(count);
        setCount(0);
    }

    return (
        <div className="flex flex-col md:flex-row md:w-full mt-2">
            <div className="flex items-center justify-between p-4 bg-blue-grayish-light rounded-md my-2 md:w-1/2 md:mr-4 md:my-0">
                <img src={iconMinus} alt="minus icon" className="hover:opacity-60 hover:cursor-pointer" onClick={() => updateCount(-1)} role="button" aria-label="Decrease quantity"/>
                <span className="text-blue-dark font-bold">{count}</span>
                <img src={iconPlus} alt="plus icon" className="hover:opacity-60 hover:cursor-pointer" onClick={() => updateCount(1)} role="button" aria-label="Increase quantity"/>
            </div>

            <button type="button" role="button" aria-label="Add items to shopping cart" className="flex items-center justify-center bg-orange p-4 rounded-md mt-2 w-full md:mt-0 hover:opacity-75 hover:cursor-pointer shadow-[#ff7d1a94] shadow-lg" onClick={handleClick}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-blue-dark" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                </svg>
                <span className="font-bold text-blue-dark ml-3">Add to cart</span>
            </button>
        </div>

    )
}