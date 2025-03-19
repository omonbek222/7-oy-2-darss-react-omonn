import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      const fetchUser = async () => {
        try {
          const res = await axios.get("https://nt-devconnector.onrender.com/api/auth", {
            headers: { "X-Auth-Token": token },
          });
          setUser(res.data);
        } catch (error) {
          console.error("Foydalanuvchi ma’lumotini yuklashda xatolik:", error);
          setUser(null);
        }
      };
      fetchUser();
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// import { createContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   useEffect(() => {
//     localStorage.setItem("token", token);
//   }, [token]);

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
