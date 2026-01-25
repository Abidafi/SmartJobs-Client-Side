import React from "react";
import { Link } from "react-router";
import { DollarSign } from "lucide-react";

const AllService = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          All Winter Pet Services
        </h1>
        <p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
          Browse all our specialized winter care services for your beloved pets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((service) => (
            <div className="card w-full max-w-[320px] h-auto min-h-[430px] sm:h-[430px] bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-100">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src={service?.image}
                  alt={service?.serviceName}
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col grow">
                {/* Service Name */}
                <h2 className="card-title text-xl font-semibold mb-3 text-gray-800 line-clamp-2 min-h-14">
                  {service?.serviceName}
                </h2>

                {/* Price and Rating Container */}
                <div className="flex items-center justify-between mb-6">
                  {/* Price Badge */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F1F5E8] rounded-lg">
                    <DollarSign className="w-5 h-5 text-[#00D390]" />
                    <span className="font-bold text-lg text-gray-800">
                      {service?.price}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#FFF0E1] rounded-lg">
                    <img
                      src="/star.png"
                      alt="Star rating"
                      className="w-5 h-5"
                    />
                    <span className="font-bold text-lg text-gray-800">
                      {service?.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  {/* View Details Button */}
                  <Link
                    to={`/services/${service?._id}`}
                    className="block w-full"
                  >
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
