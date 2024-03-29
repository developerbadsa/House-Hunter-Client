import React from 'react';

const House = ({ house }) => {
      const { _id, name, address, city, bedrooms, bathrooms, room_size, picture, availability, rent_per_month, phone_number, description } = house;


      return (
            <div className="relative rounded-md shadow-sm overflow-hidden group">
                  <img
                        src="https://i.postimg.cc/4y2GYVks/pexels-kindel-media-8566473.jpg"
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                  />
                  <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-camera"
                                    viewBox="0 0 16 16"
                              >
                                    {/* SVG paths */}
                              </svg>
                        </div>
                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                              <div
                                    className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
                              >
                                    Artificial Intelligence
                              </div>
                              <p className="text-gray-300 text-xs mb-0">Robert</p>
                        </div>
                  </div>
            </div>
      );
};

export default House;
