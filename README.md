# E-commerce Product Page - Frontend Mentor Challenge

A fully responsive e-commerce product page built with React, Vite, and Tailwind CSS featuring an interactive lightbox gallery, shopping cart functionality, and mobile-first design.

## 🎯 Challenge Overview

This project recreates a modern e-commerce product page with focus on user interaction and responsive design. The challenge emphasizes building a complete shopping experience with image galleries, cart management, and optimal layouts across all device sizes.

## 💼 Portfolio Project

This project also serves as a portfolio demonstration showcasing:
- **Frontend Development**: React component architecture and state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **User Experience**: Interactive galleries and smooth cart functionality
- **Modern Tooling**: Vite for fast development and optimized builds
- **Code Quality**: ESLint configuration and Prettier formatting

## ✨ Features

- **Interactive Lightbox Gallery**: Click on the main product image to open a full-screen gallery
- **Image Carousel**: Switch between product images using thumbnail navigation
- **Shopping Cart Management**: 
  - Add items with quantity selection
  - View cart contents in dropdown overlay
  - Remove items from cart
  - Persistent cart state
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop
- **Interactive UI Elements**: Hover states and smooth transitions throughout

## 🛠️ Built With

- **React 19** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint & Prettier** - Code quality and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Deployment

This project is configured for GitHub Pages deployment:

1. Install dependencies: `npm install`
2. Deploy to GitHub Pages: `npm run deploy`

The project will be available at `https://[username].github.io/e-commerce-project-page/`

## 📁 Project Structure

```
├── index.html              # Main HTML entry point
├── src/
│   ├── App.jsx             # Main application component
│   ├── ProductPage.jsx     # Main product page layout
│   ├── NavigationBar.jsx   # Header navigation with cart
│   ├── Carousel.jsx        # Image carousel
│   ├── CarouselDesktop.jsx # Lightbox image carousel
│   ├── CarouselItems.jsx   # Carousel navigation items
│   ├── ProductInfo.jsx     # Product details and pricing
│   ├── QuantityButton.jsx  # Quantity selector component
│   ├── ShoppingCart.jsx    # Cart overlay component
│   ├── MenuMobile.jsx      # Mobile navigation menu
│   ├── assets/             # Images and icons
│   ├── App.css             # Component styles
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # React app entry point
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎨 Design Features

- **Clean Modern Layout**: Minimalist design with focus on product presentation
- **Mobile-First Responsive**: Seamless experience across all screen sizes
- **Interactive Elements**: Smooth hover effects and button states
- **Accessible Navigation**: Clear visual hierarchy and intuitive controls

## 🔧 Functionality

### Core Features Implemented:

- ✅ Lightbox gallery with full-screen product images
- ✅ Thumbnail navigation for image switching
- ✅ Quantity selector with increment/decrement buttons
- ✅ Add to cart functionality with visual feedback
- ✅ Shopping cart overlay with item management
- ✅ Remove items from cart capability
- ✅ Responsive design for all device sizes
- ✅ Interactive hover states throughout the interface

### User Actions:

1. **Browse Images**: Click thumbnails to switch the main product image
2. **Open Lightbox**: Click the main image to view in full-screen gallery
3. **Navigate Gallery**: Use arrow buttons or thumbnails in lightbox mode
4. **Select Quantity**: Use + and - buttons to adjust item quantity
5. **Add to Cart**: Click "Add to cart" button to add items
6. **Manage Cart**: View cart contents and remove items as needed

## 💡 Key Implementation Details

- **Component Architecture**: Modular React components for maintainable code
- **State Management**: React hooks for cart and gallery state
- **Responsive Images**: Optimized image loading with appropriate sizes
- **Interactive Galleries**: Separate mobile and desktop gallery experiences

## 🌟 Future Enhancements

- Multiple product variants (colors, sizes)
- Product reviews and ratings
- Related products section
- User authentication and profiles
- Wishlist functionality
- Checkout process implementation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes as part of the Frontend Mentor challenge.

## Author

- GitHub - [@gumballoon](https://github.com/gumballoon)
- Frontend Mentor - [@gumballoon](https://www.frontendmentor.io/profile/gumballoon)
- CSS Battle - [@gumballoon](https://cssbattle.dev/player/gumballoon)

*GitHub Pages deployment and README documentation by Claude*

## 🙏 Acknowledgments

- Frontend Mentor for the design and challenge
- Design assets and requirements provided by Frontend Mentor
- React team for the powerful UI library
- Tailwind CSS team for the utility-first framework

---

**Frontend Mentor Challenge**: [E-commerce product page](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6)
