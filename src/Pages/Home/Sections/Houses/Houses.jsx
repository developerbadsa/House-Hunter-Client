import React, { useEffect, useState } from 'react';
import House from './House';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Houses = () => {

  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://house-hunter-server-beta.vercel.app/rooms');
        setHouseData(response.data);

      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }



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
            houseData.map((singeHouse, inx) => <Link to={`/HouseDetails/${singeHouse._id}`} key={inx}><House house={singeHouse}></House></Link>)
          }
          {/* Repeat the above block for each image */}
        </div>
      </div>
    </section>
  );
};

export default Houses;