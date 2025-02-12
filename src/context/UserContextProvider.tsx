import { useState } from "react";
import UserContext from "./UserContext";

export  interface UserType {
  username:string;
  password:string;
}

const UserContextProvider = ({ children }: any) => {

  const [user, setUser] = useState<UserType>({username:"", password:""});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
