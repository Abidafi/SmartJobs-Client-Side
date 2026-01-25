import { DollarSign } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const PetCard = ({ pet }) => {
  const { image, serviceName, price, rating, serviceId } = pet;

  return (
    <div className="card w-full max-w-[320px] h-auto min-h-[430px] sm:h-[430px] bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          src={image}
          alt={serviceName}
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        {/* Service Name */}
        <h2 className="card-title text-xl font-semibold mb-3 text-gray-800 line-clamp-2 min-h-14">
          {serviceName}
        </h2>

        {/* Price and Rating Container */}
        <div className="flex items-center justify-between mb-6">
          {/* Price Badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F1F5E8] rounded-lg">
            <DollarSign className="w-5 h-5 text-[#00D390]" />
            <span className="font-bold text-lg text-gray-800">{price}</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#FFF0E1] rounded-lg">
            <img src="/star.png" alt="Star rating" className="w-5 h-5" />
            <span className="font-bold text-lg text-gray-800">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
