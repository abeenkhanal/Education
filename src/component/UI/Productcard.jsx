import React from 'react'
import ReactStars from "react-rating-stars-component";

function Productcard({
    id, changeview, image, title, rating, price, originalPrice, discount, promotion
}) {
    return (
        <div
            key={id}
            className={`border rounded-lg p-4 shadow-lg ${changeview === "grid" ? "flex flex-col" : "flex flex-row"} justify-between`}
        >
            <img
                src={image}
                alt={title}
                className={`rounded-lg object-cover ${changeview === "grid" ? "h-60 w-full mb-4" : "h-40 w-40 mr-4"}`}
            />
            <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-500 flex text-sm mb-2">Rating:
                <ReactStars
count={5}
// onChange={ratingChanged}
size={24}
value={rating}
edit={false}
isHalf={true}
activeColor="#ffd700"
/>
                    </p>
                <div className="flex items-center mb-2">

                    <p className="text-lg font-bold text-gray-700">Rs. {price}</p>
                    <p className="text-sm line-through text-gray-400 ml-2">Rs. {originalPrice}</p>
                </div>
                <p className="text-sm text-green-500 mb-2">-{discount}%</p>
                <div className="flex justify-between items-center mt-auto">
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        {promotion}
                    </div>
                    <h2 className={`text-xs ${changeview == "grid" ? "text-green-500" : "text-red-500 ml-6 text-sm"} `}>Free Shipping</h2>
                </div>
            </div>
        </div>
    )
}

export default Productcard
