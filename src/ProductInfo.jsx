import QuantityButton from "./QuantityButton";

export default function ProductInfo({ info, priceOnSale, addToCart }) {
    return (
        <section className="px-4 py-6 flex flex-col text-lg">
            <h2 className="uppercase tracking-widest text-blue-grayish-dark font-bold text-sm">{ info.company }</h2>
            <h1 className="font-bold text-5xl my-4">{info.title}</h1>
            <p className="text-blue-grayish-dark mt-4">{info.description}</p>
            {info.discount
                ? <div className="flex items-center justify-between lg:flex-col lg:items-start my-4">
                    <span className="font-bold text-4xl my-4 flex items-center">${priceOnSale}
                        <span className="text-white text-xl py-1 px-3 bg-black rounded-md font-normal ml-5">{info.discount}%</span>
                    </span>
                    <span className="line-through text-blue-grayish-dark font-bold text-xl">${info.price.toFixed(2)}</span>
                </div>
                : <span className="font-bold text-4xl my-4">{info.price}</span>
            }
            < QuantityButton stock={info.stock} addToCart={addToCart}/>
        </section>
    )
}