import { useState, useEffect } from 'react';

const useUser = (userData) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect will run whenever 'info' changes
    if (userData !== null && userData !== undefined) {
      setUser(userData);
    }
  }, [userData]);

//   const test = ()=>{
//       setUser("test")
//   }

//   const setUserInfo = (info) => {
//     // No need to directly set the state here
//     // The state will be updated by the effect when 'info' changes
//      test()
//   };

  console.log('user Data from hook', user)

  return { user };
};

export default useUser;
