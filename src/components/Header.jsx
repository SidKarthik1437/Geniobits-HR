import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../context/userContext";

export default function Header({type}) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    history.push("/login");
  };

  return (
    <div className=" bg-black w-full justify-between flex flex-grow items-center align-center top-0 shadow absolute">
      <p className=" text-3xl text-white tracking-widest flex font-thin items-center align-center ml-5 my-1 ">
        {type} Panel
      </p>
      <div className="w-36">
        <button
          className="text-white tracking-widest hover:bg-white hover:text-black rounded w-20 h-8 transition-all"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
