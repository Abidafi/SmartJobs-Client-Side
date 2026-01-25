import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; // Import useParams to get the ID
import { Star, MapPin, Mail, DollarSign, Calendar, ArrowLeft } from "lucide-react";

const ServiceDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/single-service/${id}`)
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error loading service details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <h2 className="text-2xl font-bold text-gray-800">Service not found</h2>
        <Link to="/services" className="mt-4 text-blue-600 hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header / Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/services" className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Hero Image Section */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src={service.image} 
                alt={service.serviceName} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  {service.category}
                </span>
              </div>
            </div>

            {/* Service Information */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {service.serviceName}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-bold text-gray-900">{service.rating}</span>
                      <span className="ml-1 text-sm">(Expert Rated)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-500 mr-1" />
                      <span className="text-sm">In-Studio & On-site</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-b py-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">About this service</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {/* Provider Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-2.5 rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 font-semibold">Available Slots</p>
                    <p className="text-lg font-bold text-gray-900">{service.slotsAvailable} spots left</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-2.5 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-semibold">Provider Contact</p>
                    <p className="text-md font-bold text-gray-900 truncate">{service.providerEmail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Booking Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-24">
              <div className="mb-6">
                <span className="text-gray-500 text-sm">Service Fee</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-500">/ session</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <p className="text-sm text-gray-600 text-center">
                    Managed by <span className="font-bold text-gray-900">{service.providerName}</span>
                  </p>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0">
                  Book Appointment Now
                </button>
                
                <p className="text-xs text-center text-gray-500">
                  Free cancellation up to 24 hours before the service.
                </p>
              </div>

              <hr className="my-6" />

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">What's included:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">✅ Professional consultation</li>
                  <li className="flex items-center">✅ High-quality winter equipment</li>
                  <li className="flex items-center">✅ Personalized care plan</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;