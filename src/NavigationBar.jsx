import iconMenu from './assets/icon-menu.svg';
import logo from './assets/logo.svg';
import iconCart from './assets/icon-cart.svg';
import avatar from './assets/image-avatar.png';

export default function NavigationBar({ toggleMenuMobile, toggleShoppingCart, cartItems }) {
    return (
        <nav className="relative w-full flex py-5 px-7 justify-between items-center lg:items-start lg:border-blue-grayish-light lg:border-b-4 lg:pb-0 lg:absolute lg:top-0">
            <div className='flex items-center lg:items-start'>
                <img src={iconMenu} alt="menu icon" className='w-5 mt-1 mr-5 lg:hidden hover:cursor-pointer' onClick={() => toggleMenuMobile(true)}/>
                <img src={logo} alt="logo"/>
                <div className='hidden lg:flex gap-8 ml-16 text-blue-grayish-dark'>
                    <span className='border-transparent border-b-4 lg:pb-10 hover:border-orange hover:text-blue-dark hover:cursor-pointer'>Collections</span>
                    <span className='border-transparent border-b-4 lg:pb-10 hover:border-orange hover:text-blue-dark hover:cursor-pointer'>Men</span>
                    <span className='border-transparent border-b-4 lg:pb-10 hover:border-orange hover:text-blue-dark hover:cursor-pointer'>Women</span>
                    <span className='border-transparent border-b-4 lg:pb-10 hover:border-orange hover:text-blue-dark hover:cursor-pointer'>About</span>
                    <span className='border-transparent border-b-4 lg:pb-10 hover:border-orange hover:text-blue-dark hover:cursor-pointer'>Contact</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative'>
                    <img src={iconCart} alt="cart icon" className='w-6 h-6 mr-5 hover:cursor-pointer' onClick={() => toggleShoppingCart()}/>
                    {cartItems > 0 && <span className='px-2 rounded-2xl bg-orange text-xs text-white font-semibold absolute -top-2 right-3'>{cartItems}</span>}
                </div>
                <img src={avatar} alt="avatar" className='w-9 border-transparent border-2 rounded-full hover:border-orange hover:cursor-pointer'/>
            </div>
        </nav>
    )
}