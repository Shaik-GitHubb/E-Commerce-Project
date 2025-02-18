import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/me", { withCredentials: true });
        setUser(response.data.user);
        console.log("user",response.data.user);
      } catch (error) {
        console.log("Not authenticated");
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      console.log("It is being called for login")
      await axios.post("http://localhost:3000/user/login", { email, password }, { withCredentials: true });
      // window.location.reload(); // Reload to fetch user info
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error);
    }
  };

  const logout = async () => {
    console.log("in auth",user)
    await axios.get("http://localhost:3000/user/logout", {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
