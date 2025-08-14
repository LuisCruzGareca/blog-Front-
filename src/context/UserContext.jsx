import { useContext, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [item, setItem] = useState(null);

  return (
    <UserContext.Provider value={{ item, setItem }}>
      {children}
    </UserContext.Provider>
  );
}
