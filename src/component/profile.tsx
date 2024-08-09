import { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user }: any = useContext(UserContext);
  console.log("user", user);
  if (!user && user == null && user?.username === "" && user?.username == null)
    return <div className="text-white text-center">please login</div>;

  return <div className="text-white text-center">Welcome {user?.username}</div>;
};

export default Profile;
