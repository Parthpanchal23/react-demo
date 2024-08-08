import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-white flex text-3xl p-4 text-center bg-orange-400 ">
      User : -<b className="text-black">{userid}</b>
    </div>
  );
};

export default User;
