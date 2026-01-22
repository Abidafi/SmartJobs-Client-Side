import React from "react";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'animate.css/animate.min.css';

import PetCard from "../components/PetCard";
import usePets from "../hooks/usePets";
import { Link } from "react-router";

const Homepage = () => {
  const { pet } = usePets();

  const featuredPets = pet.slice(0, 8);

  const winterPets = [
    {
      id: 1,
      name: "Coco",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Wrapped in a cozy knitted sweater, enjoying the winter wonderland",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop",
      outfit: "Hand-knitted Red Sweater",
    },
    {
      id: 2,
      name: "Mittens",
      type: "Cat",
      breed: "Persian",
      description: "Snuggled up by the fireplace in a warm winter hat",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop",
      outfit: "Cozy Knit Hat",
    },
    {
      id: 3,
      name: "Snowball",
      type: "Rabbit",
      breed: "Angora",
      description: "Wearing a tiny scarf, hopping through the snowy garden",
      image:
        "https://images.unsplash.com/photo-1556838803-cc94986cb631?q=80&w=1974&auto=format&fit=crop",
      outfit: "Striped Winter Scarf",
    },
    {
      id: 4,
      name: "Oscar",
      type: "Dog",
      breed: "Siberian Husky",
      description: "Rocking a stylish winter jacket for chilly walks",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop",
      outfit: "Puffy Winter Jacket",
    },
    {
      id: 5,
      name: "Whiskers",
      type: "Cat",
      breed: "Scottish Fold",
      description: "Curled up in a warm blanket with matching booties",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop",
      outfit: "Fuzzy Booties Set",
    },
  ];

  const clientReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      pet: "Max (Golden Retriever)",
      review:
        "The winter care service was exceptional! Max loved his new sweater and the team was incredibly attentive to his needs during the cold months.",
      rating: 5,
      date: "January 2024",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      pet: "Luna (Persian Cat)",
      review:
        "Outstanding service! They provided the perfect winter gear for Luna and gave us valuable tips for keeping her warm. Highly recommended!",
      rating: 5,
      date: "December 2023",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      pet: "Bella & Charlie (Rabbits)",
      review:
        "Our bunnies are so cozy in their winter outfits! The care instructions were thorough and the team really understands pet needs.",
      rating: 4,
      date: "February 2024",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "David Wilson",
      pet: "Rocky (Siberian Husky)",
      review:
        "Professional and caring staff. Rocky's winter jacket fits perfectly and he loves his walks now even in freezing weather!",
      rating: 5,
      date: "January 2024",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
    },
  ];

  const expertVets = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialization: "Winter Pet Care Specialist",
      experience: "12 years",
      description: "Expert in cold-weather pet health and wellness, with focus on winter coat care and seasonal nutrition.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop",
      badge: "❄️ Winter Expert"
    },
    {
      id: 2,
      name: "Dr. Marcus Lee",
      specialization: "Canine Winter Health",
      experience: "8 years",
      description: "Specializes in dog winter wellness, arthritis management in cold weather, and paw care.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop",
      badge: "🐕 Dog Specialist"
    },
    {
      id: 3,
      name: "Dr. Marcos Rodriguez",
      specialization: "Feline Cold-Weather Care",
      experience: "10 years",
      description: "Focuses on indoor cat wellness during winter months and temperature regulation.",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "🐈 Cat Specialist"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Exotic Pets Winter Care",
      experience: "15 years",
      description: "Expert in rabbit, guinea pig, and small animal winter care with focus on habitat temperature control.",
      image: "https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "🐇 Exotic Pets"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex">
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-100 text-center pt-10 md:pt-15 lg:pt-18">
      {/* Winter-themed header */}
      <div className="text-center mb-8 px-4">
        <h1 className="animate__animated animate__bounce animate__infinite text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3">
          🐾 Winter Pet Paradise 🐾
        </h1>
        <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto">
          Meet our adorable pets dressed in their coziest winter outfits,
          looking for a warm home this season
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="w-full max-w-6xl px-4 py-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="winter-pet-swiper rounded-3xl overflow-hidden shadow-2xl"
          breakpoints={{
            // Responsive breakpoints
            320: {
              // Mobile
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              // Tablet
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              // Desktop
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {winterPets.map((pet) => (
            <SwiperSlide key={pet.id}>
              <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px]">
                {/* Background with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-600/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end items-start p-6 md:p-12 text-left">
                  {/* Winter badge */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {pet.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
                      {pet.type} • {pet.breed}
                    </span>
                    <span className="bg-amber-500/90 text-white px-4 py-2 rounded-full font-semibold flex items-center">
                      🧥 {pet.outfit}
                    </span>
                  </div>

                  <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl">
                    {pet.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Winter Care Services  */}
      <div className="w-full px-4 mt-12 mb-16 md:mt-[80px] text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Popular Winter Care Services
        </h1>
        <p className="mt-4 text-sm text-gray-400 font-normal sm:text-base md:mt-[20px] md:text-lg">
          At Winter Pet Paradise, we truly love and care for every type and
          breed of pet. Our pet care services are tailored to meet the
          individual needs of each animal and are designed to ensure that they
          are as happy and healthy as possible. We understand that it takes more
          than just love to provide quality pet care, so we strive to provide
          the highest standard of care to each and every pet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-11/12 mx-auto px-2 sm:px-0">
        {featuredPets.map((pet) => (
          <Link
            key={pet.serviceId}
            to={`/${pet.serviceId}`}
            className="block transform transition-transform hover:scale-105"
          >
            <PetCard key={pet.serviceId} pet={pet} />
          </Link>
        ))}
      </div>

      {/* Winter Tips Section */}
      <div className="mt-12 w-full px-4">
        <div className="backdrop-blur-sm rounded-3xl p-6 md:p-8 w-full">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 flex items-center justify-center">
            <span className="mr-3">❄️</span>
            Winter Pet Care Tips
            <span className="ml-3">🔥</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-blue-100 p-4 rounded-2xl w-full">
              <h4 className="font-semibold text-blue-800 mb-2">
                🧣 Keep Them Cozy
              </h4>
              <p className="text-blue-700 font-normal">
                Small or short-haired pets may need sweaters for outdoor walks
              </p>
            </div>
            <div className="bg-cyan-100 p-4 rounded-2xl w-full">
              <h4 className="font-semibold text-cyan-800 mb-2">
                🦶 Protect Paws
              </h4>
              <p className="text-cyan-700 font-normal">
                Use pet-safe ice melt and wipe paws after walks
              </p>
            </div>
            <div className="bg-indigo-100 p-4 rounded-2xl w-full">
              <h4 className="font-semibold text-indigo-800 mb-2">
                🏡 Indoor Comfort
              </h4>
              <p className="text-indigo-700 font-normal">
                Provide warm bedding away from drafts during cold months
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Review Section */}
      <div className="w-full px-4 mt-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-blue-900 mb-2 text-center">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
            Hear from pet parents who trusted us with their furry family members
            this winter
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                {/* Review Header */}
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">{review.name}</h4>
                    <p className="text-sm text-blue-600">{review.pet}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-4">{renderStars(review.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-700 italic mb-4">"{review.review}"</p>

                {/* Winter Theme Decoration */}
                <div className="flex justify-end">
                  <span className="text-2xl">❄️</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Reviews Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Meet Our Expert Vets Section */}
      <div className="w-full px-4 mt-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-blue-900 mb-2 text-center">
            🩺 Meet Our Expert Vets
          </h2>
          <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
            Our specialized veterinary team is dedicated to keeping your pets
            healthy and happy throughout the winter season
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertVets.map((vet) => (
              <div
                key={vet.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                {/* Vet Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Vet Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {vet.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {vet.specialization}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="text-amber-500 mr-2">⭐</span>
                    <span className="text-gray-600 font-medium">
                      {vet.experience} Experience
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {vet.description}
                  </p>

                  {/* Contact Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center">
                    <span className="mr-2">📞</span>
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Vets Button */}
          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto">
              <span className="mr-3">👨‍⚕️</span>
              Meet Our Full Veterinary Team
              <span className="ml-3">👩‍⚕️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .winter-pet-swiper {
          --swiper-pagination-color: #3b82f6;
          --swiper-pagination-bullet-inactive-color: #93c5fd;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
          --swiper-pagination-bullet-size: 12px;
          --swiper-pagination-bullet-horizontal-gap: 6px;
          --swiper-navigation-color: #ffffff;
          --swiper-navigation-size: 30px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(59, 130, 246, 0.7);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;
