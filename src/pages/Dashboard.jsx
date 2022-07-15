import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import { userState } from "../context/userContext";
import { Radio } from "@material-tailwind/react";
import UserProfile from "../components/UserProfile";
import AdminPanel from "../components/AdminPanel";
export default function Dashboard() {
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  if (!user) {
    const prev = JSON.parse(localStorage.getItem("authUser"));
    console.log(prev);
    if (prev) {
      setUser(prev);
    } else {
      history.push("/login");
    }
  }

  return (
    <div className="w-full h-screen">
      <Header type={user.type === 'User' ? "Employee" : "Admin"} />
      {user.type === "Admin" ? (
        <AdminPanel user={user} />
      ) : (
        <UserProfile user={user} />
      )}
    </div>
  );
}
