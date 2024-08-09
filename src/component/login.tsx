import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser }: any = useContext(UserContext);

  const handleSubmit = (e) => {
    console.log("e", e);
    // e.prevent.default();
    setUser({ username, password });
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-svh">
              <div
                className="p-6  bg-gray-100 sm:rounded-lg"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="p-6 flex bg-white flex-col justify-center container">
                <h1 className="text-3xl mb-3 *:sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Login
                </h1>
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="password" className="hidden">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
