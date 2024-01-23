
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HouseDetails = () => {
      const { id } = useParams();
      const [houseDetails, setHouseDetails] = useState({});
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const { _id, name, address, city, bedrooms, bathrooms, room_size, picture, availability, rent_per_month, phone_number, description } = houseDetails;

      console.log(availability)

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get(`http://localhost:3000/rooms/${id}`);
                        setHouseDetails(response.data);
                  } catch (error) {
                        setError(error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchData();
      }, [id]);

      if (loading) {
            return <div>Loading...</div>; // You can replace this with a loading spinner or animation
      }
      if (error) {
            return <div>Error loading data: {error.message}</div>;
      }



      return (
            <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
                  <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                        <div className="flex flex-wrap -mx-4">
                              <div className="w-full px-4 md:w-1/2">
                                    <div className="sticky top-0 z-50 overflow-hidden">
                                          <div className="relative mb-6 lg:mb-10" style={{ height: '450px' }}>
                                                <img src={picture}
                                                      alt=""
                                                      className="object-contain w-full h-full"
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                          <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                                <h2 className='text-2xl font-semibold my-4'>  Name: {name}</h2>
                                                <p className='text-sm'>
                                                      {description}
                                                </p>
                                                <div className='mt-4'>Room Size: {room_size}</div>
                                                <div className='my-1'> Bed Rooms: {bedrooms}</div>
                                                <div className='my-1'>Bathrooms Rooms: {bathrooms}</div>
                                          </div>
                                          <div className="mb-8">
                                                Address: {address}, {city}
                                          </div>
                                          <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                                                {/* ... (Real time visitors) */}

                                          </div>
                                          <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                                                {/* ... (Size options) */}
                                                <div className='font-medium'>Owner Phone: {phone_number}</div>
                                                <div className='my-2 font-bold'>Price: {rent_per_month} /Month</div>
                                          </div>
                                          <div className="flex flex-wrap items-center">
                                                {/* ... (Quantity and buttons) */}
                                                <button className='text-base border px-3 rounded-lg py-1 font-semibold'> </button>
                                                <button className='text-base border px-3 rounded-lg py-1 font-semibold'>Availability: {availability ? 'Available for Now' : 'Not Available'}</button>
                                          </div>
                                          <div className='my-8'>
                                                <button className='border py-2 px-8 bg-fuchsia-500 text-white font-semibold rounded'>Book Now</button>
                                          </div>
                                    </div>
                                    
                              </div>
                              
                        </div>
                  </div>
            </section>
      );
};

export default HouseDetails;