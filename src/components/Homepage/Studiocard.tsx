'use client'

import Image from "next/image";

const Studiocard = ({ data }) => {
const {
_id,
title,
category,
image,
hourlyRate,
rating,
location,
buttonText
} = data;

return ( <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">


  <div className="h-52 overflow-hidden">
    <Image
      src={image}
      alt={title}
      width={50}
      height={50}
      className="w-full h-full object-cover hover:scale-105 transition duration-300"
    />
  </div>


  <div className="p-5">


    <div className="flex justify-between items-center mb-3">
      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        {category}
      </span>

      <span className="text-sm font-semibold text-yellow-600">
        ⭐ {rating}
      </span>
    </div>

    {/* Title */}
    <h2 className="text-xl font-bold text-gray-800 mb-2">
      {title}
    </h2>

    {/* Location */}
    <p className="text-gray-500 text-sm mb-4">
      📍 {location}
    </p>

    {/* Price & Button */}
    <div className="flex justify-between items-center border-t pt-4">

      <div>
        <span className="text-2xl font-bold text-gray-900">
          ${hourlyRate}
        </span>
        <span className="text-sm text-gray-500"> / hour</span>
      </div>

      <button
        onClick={() => console.log('Studio ID:', _id)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        {buttonText}
      </button>

    </div>

  </div>
</div>

);
};

export default Studiocard;
