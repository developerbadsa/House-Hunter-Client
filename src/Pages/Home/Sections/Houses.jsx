import React from 'react';
import House from './Houses/House';

const Houses = () => {

      const houseData = [
            {
              "name": "Cozy Cottage",
              "address": "123 Main Street",
              "city": "Dhaka",
              "bedrooms": 2,
              "bathrooms": 1,
              "room_size": "1200 sqft",
              "picture": "cozy_cottage.jpg",
              "availability_date": "2024-02-01",
              "rent_per_month": 15000,
              "phone_number": "+8801712345678",
              "description": "A charming cottage with a beautiful garden."
            },
            {
              "name": "Modern Apartment",
              "address": "456 Oak Avenue",
              "city": "Chittagong",
              "bedrooms": 3,
              "bathrooms": 2,
              "room_size": "1800 sqft",
              "picture": "modern_apartment.jpg",
              "availability_date": "2024-03-15",
              "rent_per_month": 25000,
              "phone_number": "+8801812345678",
              "description": "Sleek and modern apartment with stunning city views."
            },
            {
              "name": "Riverside Villa",
              "address": "789 River Road",
              "city": "Rajshahi",
              "bedrooms": 4,
              "bathrooms": 3,
              "room_size": "2500 sqft",
              "picture": "riverside_villa.jpg",
              "availability_date": "2024-04-20",
              "rent_per_month": 35000,
              "phone_number": "+8801912345678",
              "description": "Luxurious villa with a picturesque view of the river."
            },
            {
              "name": "Spacious Townhouse",
              "address": "234 Elm Street",
              "city": "Dhaka",
              "bedrooms": 3,
              "bathrooms": 2.5,
              "room_size": "2000 sqft",
              "picture": "spacious_townhouse.jpg",
              "availability_date": "2024-05-10",
              "rent_per_month": 28000,
              "phone_number": "+8802012345678",
              "description": "Elegant townhouse with plenty of space for a growing family."
            },
            {
              "name": "Garden Retreat",
              "address": "567 Green Lane",
              "city": "Sylhet",
              "bedrooms": 2,
              "bathrooms": 1.5,
              "room_size": "1500 sqft",
              "picture": "garden_retreat.jpg",
              "availability_date": "2024-06-05",
              "rent_per_month": 20000,
              "phone_number": "+8802112345678",
              "description": "Relaxing retreat with a beautiful garden and cozy interiors."
            }
          ]

      return (
            <section className="flex items-center bg-gray-100 py-16 dark:bg-gray-800 font-poppins">
            <div className="p-4 mx-auto max-w-6xl">
              <h2 className="pb-4 font-bold text-center text-gray-800 text-4xl dark:text-gray-400">
                Our Gallery
              </h2>
              <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                {/* Repeat the following block for each image */}

                  {
                        houseData.map((singeHouse, inx)=><House key={inx} house={singeHouse}></House>)
                  }
                {/* Repeat the above block for each image */}
              </div>
            </div>
          </section>
      );
};

export default Houses;