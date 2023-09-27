import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [user, setUser] = useState(localStorage.getItem('accessToken' || false)) ;
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
