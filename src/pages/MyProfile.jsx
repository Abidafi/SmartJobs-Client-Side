import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Md Abidur Rahman",
    email: "abid.rahman@example.com",
    address: "Dhaka, Bangladesh",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
    phone: "+880 19-12 34 56 78",
    bio: "Passionate pet owner and animal lover. I have two dogs and a cat who are my whole world!",
    joinDate: "January 2024"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  // Update form data when userData changes
  useEffect(() => {
    setFormData({ ...userData });
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = () => {
    // Validate form data
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.address.trim()) {
      toast.error("Please enter your address");
      return;
    }

    // In a real app, this would be an API call
    setUserData({ ...formData });
    setIsEditing(false);
    
    toast.success("✅ Profile updated successfully!");
    
    // Simulate API call delay
    setTimeout(() => {
      toast.info("Profile changes saved!");
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
  };

  const cancelEdit = () => {
    setFormData({ ...userData });
    setIsEditing(false);
    toast.info("Edit cancelled");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-10 md:py-15 lg:py-18 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            👤 My Profile
          </h1>
          <p className="text-lg text-blue-700">
            Manage your account information and pet details
          </p>
        </div>

        {isEditing ? (
          /* Edit Profile Form */
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">Update Profile</h2>
              <button
                onClick={cancelEdit}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                ✕ Cancel
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Profile Image */}
                <div className="md:w-1/3">
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Profile Picture
                    </label>
                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                      <img
                        src={formData.image}
                        alt="Profile Preview"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                      <label className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        📷
                      </label>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 text-center md:text-left">
                      Click the camera icon to upload a new photo
                    </p>
                  </div>
                </div>

                {/* Right Column - Form Fields */}
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Email cannot be changed
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Tell us about yourself and your pets..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  💾 Save Changes
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Profile Display */
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <img
                    src={userData.image}
                    alt={userData.name}
                    className="w-32 h-32 object-cover rounded-2xl border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-amber-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    Member
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white">{userData.name}</h2>
                  <p className="text-blue-100">Pet Parent since {userData.joinDate}</p>
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      🐾 Active Member
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3">📧</span>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-800 font-medium">{userData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3">📱</span>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-gray-800 font-medium">{userData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3">🏠</span>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-gray-800 font-medium">{userData.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">About Me</h3>
                  <div className="bg-blue-50 rounded-2xl p-5">
                    <p className="text-gray-700">{userData.bio}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <span className="mr-2">✏️</span>
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;