import NavigationBar from "./NavigationBar";
import MenuMobile from "./MenuMobile";
import ShoppingCart from "./ShoppingCart";
import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
import CarouselDesktop from "./CarouselDesktop";

import { useState } from "react";

export default function ProductPage( { product }) {
    const priceOnSale = product.info.discount && (product.info.price * product.info.discount * 0.01).toFixed(2);

    const [cartItems, setCartItems] = useState(0);
    const [isMenuMobileVisible, setIsMenuMobileVisible] = useState(false);
    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false);
    const [isCarouselDesktopVisible, setIsCarouselDesktopVisible] = useState(false);

    function toggleShoppingCart() {
        return setIsShoppingCartVisible(!isShoppingCartVisible);
    }

    function toggleCarouselDesktop() {
        return setIsCarouselDesktopVisible(!isCarouselDesktopVisible);
    }

    function addToCart(items) {
        return setCartItems(oldItems => oldItems + items)
    }

    function resetCart() {
        return setCartItems(0);
    }

    return(
        <div className="relative max-w-screen-xl mx-auto flex flex-col justify-center lg:h-screen">
            < NavigationBar toggleMenuMobile={setIsMenuMobileVisible} toggleShoppingCart={toggleShoppingCart} cartItems={cartItems}/>

            <div className="flex flex-col lg:flex-row lg:gap-24 lg:items-center lg:px-12">
                < Carousel images={product.images} toggleCarouselDesktop={toggleCarouselDesktop}/>
                
                < ProductInfo info={product.info} priceOnSale={priceOnSale} addToCart={addToCart}/>
            </div>

            < ShoppingCart product={product} priceOnSale={priceOnSale} isVisible={isShoppingCartVisible} cartItems={cartItems} resetCart={resetCart}/>

            < MenuMobile isVisible={isMenuMobileVisible} closeMenuMobile={() => setIsMenuMobileVisible(false)} />

            < CarouselDesktop isVisible={isCarouselDesktopVisible} toggleCarouselDesktop={toggleCarouselDesktop} images={product.images}/>
        </div>
    )
}