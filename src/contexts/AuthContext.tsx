// import { useState, useEffect, createContext } from "react";

// export const AuthContext = createContext();

// const AuthContextProvider = (props) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const setAuth = (boolean) => {
//     setIsAuthenticated(boolean);
//   };

//   //Auth API logic here//
//   const apiOptions = {
//     url: "users/is-verified",
//     method: "GET",
//     headers: {
//       token: localStorage.token,
//     },
//   };

//   async function isAuth() {
//     axios(apiOptions)
//       .then((response) => {
//         const resData = response.data;
//         resData === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }

//   useEffect(() => {
//     isAuth();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, setIsAuthenticated, setAuth }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
import React from "react";

const AuthContext = () => {
  return <div></div>;
};

export default AuthContext;
