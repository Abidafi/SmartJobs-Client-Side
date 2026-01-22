import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    petName: "",
    date: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success toast
    toast.success(
      `✅ Service booked successfully for ${formData.petName || "your pet"}!`
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
      service: "",
      petName: "",
      date: "",
    });
  };

  const winterServices = [
    {
      id: 1,
      title: "Winter Coat Grooming",
      description: "Specialized grooming to maintain healthy winter coats.",
      price: "$45 - $85",
      duration: "1-2 hours",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop",
      features: [
        "De-matting",
        "Conditioning treatment",
        "Paw pad care",
        "Sanitary trim",
      ],
    },
    {
      id: 2,
      title: "Winter Wellness Checkup",
      description:
        "Comprehensive health assessment for cold weather conditions",
      price: "$65 - $120",
      duration: "30-45 mins",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop",
      features: [
        "Vital signs check",
        "Joint health assessment",
        "Weight management",
        "Nutrition consultation",
      ],
    },
    {
      id: 3,
      title: "Indoor Winter Enrichment",
      description: "Stimulating activities for pets during indoor months",
      price: "$35 - $75",
      duration: "1 hour",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop",
      features: [
        "Puzzle games",
        "Interactive toys",
        "Training sessions",
        "Mental stimulation",
      ],
    },
    {
      id: 4,
      title: "Winter Paw Protection",
      description:
        "Paw care and protection against ice, salt, and cold surfaces",
      price: "$25 - $50",
      duration: "30 mins",
      image:
        "https://images.pexels.com/photos/15623468/pexels-photo-15623468.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Paw wax application",
        "Nail trimming",
        "Hair trimming",
        "Moisturizing",
      ],
    },
    {
      id: 5,
      title: "Winter Nutrition Planning",
      description: "Customized diet plans for seasonal nutritional needs",
      price: "$55 - $95",
      duration: "45 mins",
      image:
        "https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Diet analysis",
        "Supplement guidance",
        "Weight control",
        "Hydration tips",
      ],
    },
    {
      id: 6,
      title: "Holiday Pet Sitting",
      description:
        "Special holiday care while you're away during winter season",
      price: "$50 - $120/day",
      duration: "Custom",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop",
      features: [
        "Daily visits",
        "Medication admin",
        "Play sessions",
        "Photo updates",
      ],
    },
  ];

  const servicePackages = [
    {
      id: "basic",
      name: "Winter Essentials",
      price: "$99",
      duration: "Monthly",
      features: ["Winter grooming", "Paw protection", "Basic checkup"],
      bestFor: "Small dogs & cats",
    },
    {
      id: "premium",
      name: "Winter Deluxe",
      price: "$199",
      duration: "Monthly",
      features: [
        "Full grooming",
        "Wellness check",
        "Nutrition planning",
        "Enrichment activities",
      ],
      bestFor: "All pets",
      popular: true,
    },
    {
      id: "ultimate",
      name: "Winter Complete",
      price: "$299",
      duration: "Monthly",
      features: [
        "All services",
        "Unlimited consultations",
        "Emergency support",
        "Priority booking",
      ],
      bestFor: "Multiple pets",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 pt-10 md:pt-15 lg:pt-18">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4 py-8">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          ❄️ Winter Pet Services ❄️
        </h1>
        <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto mb-6">
          Keep your furry friends warm, healthy, and happy all winter long with
          our specialized seasonal services
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            🐕 Dog Services
          </span>
          <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-semibold">
            🐈 Cat Services
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
            🐇 Small Pets
          </span>
          <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
            🩺 Wellness
          </span>
        </div>
      </div>
      {/* Services Slider */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl overflow-hidden shadow-2xl"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {winterServices.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg m-2 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">
                      Duration: {service.duration}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setFormData({ ...formData, service: service.title })
                    }
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Service Packages */}
      <div className="w-full px-4 mt-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl text-blue-900 mb-2 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Winter Service Packages
          </h2>
          <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
            Choose the perfect package for your pet's winter needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-4 border-yellow-400"
                    : "bg-white border border-blue-100"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-400">/{pkg.duration}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-4">
                  <span className="text-sm opacity-80">
                    Best for: {pkg.bestFor}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setFormData({ ...formData, service: pkg.name })
                  }
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500"
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl text-blue-900 mb-2 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Service Reviews
          </h2>
          <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
            See what our clients say about our winter services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: "Lisa M.",
                service: "Winter Grooming",
                review:
                  "My husky's coat has never looked better! The winter grooming service was exceptional.",
                rating: 5,
              },
              {
                name: "Robert K.",
                service: "Wellness Check",
                review:
                  "The vet spotted early signs of arthritis we would have missed. Winter wellness saved our dog!",
                rating: 5,
              },
              {
                name: "Sophia L.",
                service: "Pet Sitting",
                review:
                  "Best holiday pet sitting service ever! Daily photos and updates gave us peace of mind.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Service Form */}
      <div className="w-full p-6 mt-3">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2
                className="text-3xl font-bold text-blue-900 mb-2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Book Your Winter Service
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you within 24 hours to
                confirm your booking
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Write Down Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service / Package *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select a service</option>
                    {winterServices.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title} ({service.price})
                      </option>
                    ))}
                    {servicePackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} Package ({pkg.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pet's Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your Pet Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center"
                >
                  <span className="mr-2">📅</span>
                  Book Now
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By booking, you agree to our terms of service. We'll contact
                  you to confirm details.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-5xl mb-4">❄️</div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Our Winter Services?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-3">✅</span>
                    <span>Specialized cold-weather care</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✅</span>
                    <span>Certified winter pet experts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✅</span>
                    <span>Pet-safe products and methods</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✅</span>
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✅</span>
                    <span>24/7 emergency support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold mb-3">📞 Need Help?</h4>
                <p className="mb-2">
                  Call us: <span className="font-bold">(555) 123-WARM</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="font-bold">winter@petparadise.com</span>
                </p>
                <p className="text-sm mt-4 opacity-90">
                  Monday-Friday: 8AM-8PM
                </p>
                <p className="text-sm opacity-90">Weekends: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(59, 130, 246, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
          color: white;
        }

        input,
        select {
          outline: none;
        }

        input:focus,
        select:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Services;
