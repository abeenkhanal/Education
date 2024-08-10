import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillGridFill } from "react-icons/bs";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; 

const DarazcardData = [
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "Men and Women's Short-Sleeved Printed Shirt, Casual Beach Clothes, Personality Thin Couple Tops, New",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'shirt.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },
    {
        id: 1,
        title: "ShopMee Summer Men' Stylish Combo Set Of Half-Pant And Tshirt",
        price: 1128,
        originalPrice: 3044,
        discount: 63,
        image: 'pant.jpg',
        rating: "No Ratings",
        brand: "No Brand",
        promotion: "Min. spend Rs. 499",

    },

];
const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (rating >= starValue) {
            return <FaStar key={index} className="text-yellow-500" />; // Full star
        } else if (rating >= starValue - 0.5) {
            return <FaStarHalfAlt key={index} className="text-yellow-500" />; // Half star
        } else {
            return <FaRegStar key={index} className="text-yellow-500" />; // Empty star
        }
    });
    return <div className="flex">{stars}</div>; // Render the stars
};

const Darazcard = () => {
    const [lastindex, setlastindex] = useState(4);
    const [changeview, setchangeview] = useState("grid");

    return (
        <div className="p-4 pt-20 bg-white">
            <div className="flex justify-end w-full max-w-7xl mx-auto gap-4 text-xl">
                <button
                    onClick={() => {
                        setchangeview("grid");
                    }}
                    className={`p-2 rounded ${changeview === "grid" ? "bg-gray-200" : ""}`}
                >
                    <BsFillGridFill />
                </button>
                <button
                    onClick={() => {
                        setchangeview("flex");
                    }}
                    className={`p-2 rounded ${changeview === "flex" ? "bg-gray-200" : ""}`}
                >
                    <TfiMenuAlt />
                </button>
            </div>

            <div className={`grid gap-6 max-w-7xl mx-auto mt-8 ${changeview === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {DarazcardData.slice(0, lastindex).map((value) => (
                    <div
                        key={value.id}
                        className={`border rounded-lg p-4 shadow-lg ${changeview === "grid" ? "flex flex-col" : "flex flex-row"} justify-between`}
                    >
                        <img
                            src={value.image}
                            alt={value.title}
                            className={`rounded-lg object-cover ${changeview === "grid" ? "h-60 w-full mb-4" : "h-40 w-40 mr-4"}`}
                        />
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-lg font-semibold mb-2">{value.title}</h2>
                            <p className="text-gray-500 text-sm mb-2">Rating: {value.rating}</p>
                            <div className="flex items-center mb-2">
                                
                                <p className="text-lg font-bold text-gray-700">Rs. {value.price}</p>
                                <p className="text-sm line-through text-gray-400 ml-2">Rs. {value.originalPrice}</p>
                            </div>
                            <p className="text-sm text-green-500 mb-2">-{value.discount}%</p>
                            <div className="flex justify-between items-center mt-auto">
                                <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                    {value.promotion}
                                </div>
                                <h2 className={`text-xs ${changeview == "grid"? "text-green-500" : "text-red-500 ml-6 text-sm"} `}>Free Shipping</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center w-full justify-center mt-8">
                <button
                    onClick={() => {
                        setlastindex(lastindex + 3);
                    }}
                    className="bg-green-500 p-3 text-white rounded hover:bg-green-600"
                >
                    View More
                </button>
            </div>
        </div>
    );
};

export default Darazcard
