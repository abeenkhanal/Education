import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillGridFill } from "react-icons/bs";

import { Rating } from 'react-simple-star-rating'
import { DarazcardData } from '../Data/Productdata';
import Productcard from '../UI/Productcard';


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
                  <Productcard
                  id={value.id}
                  title={value.title}
                  rating={value.rating}
                  image={value.image}
                  changeview={changeview}
                  price={value.price}
                  originalPrice={value.originalPrice}
                  promotion={value.promotion}
                discount={value.discount}
                  />
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
