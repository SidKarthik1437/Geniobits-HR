import { Input, Radio } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

const token =
  "52bbde6fb90b8ac3fb4f60b7ed13c8aa00eda1c620b51cc3a4954c6b17a04744";

function AdminPanel({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [gender, setGender] = useState("");

  const Clear = () => {
    setName("");
    setEmail("");
    setGender("");
    setStatus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };
    axios.post("https://gorest.co.in/public/v2/users", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  return (
    <div className="bg-grey-primary w-full h-screen flex items-center justify-center">
      <div className="w-4/6 h-4/6 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center space-y-10">
        <div className="grid grid-cols-7 px-5">
          <div className="flex flex-col col-span-2 items-center w-full pr-10">
            <div className="flex flex-col space-y-5 items-center mt-14 mr-10">
              <img
                src={
                  gender === "male"
                    ? "https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846325.jpg"
                    : gender === "female"
                    ? "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                    : "https://images.unsplash.com/photo-1603346133929-24265debae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                }
                className="w-40 h-40 rounded-full object-fill shadow-2xl"
              />
              <p className="font-semibold text-xl">{name}</p>
            </div>
          </div>
          {/* <div></div> */}
          <div className="flex flex-col w-full col-span-5 space-y-5 px-10 ">
            <span className="text-2xl font-bold tracking-wider">
              Personal Details
            </span>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                EID
              </span>
              <input
                type="number"
                className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r"
                placeholder="EID"
                //   onChange={(e) => setId(e.target.value)}
                value="Auto Generated"
                disabled
              />
              {/* {id} */}
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Fullname
              </span>
              <input
                className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r"
                placeholder="Fullname"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Email
              </span>
              <input
                type="email"
                className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Gender
              </span>
              <div className="flex w-full justify-evenly border border-gray-300 h-10 rounded-r">
                <div className="flex items-center h-10 space-x-2">
                  <span>Male</span>
                  <Radio
                    type="radio"
                    name="gender"
                    value="male"
                    className="text-lg border !h-10 w-5 border-gray-300 pl-2 pt-1"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="flex items-center h-10 space-x-2">
                  <span>Female</span>
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    className="text-lg border !h-10 w-5 border-gray-300 pl-2 pt-1"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Activate
              </span>
              <div className="flex w-full justify-evenly border border-gray-300 h-10 rounded-r">
                <div className="flex items-center h-10 space-x-2">
                  <span>True</span>
                  <Radio
                    type="radio"
                    name="status"
                    value="true"
                    className="text-lg border !h-10 w-5 border-gray-300 pl-2 pt-1"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="flex items-center h-10 space-x-2">
                  <span>False</span>
                  <Radio
                    type="radio"
                    name="status"
                    value="false"
                    className="text-lg border !h-10 w-5 border-gray-300 pl-2 pt-1"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center h-10 w-full ">
          <button
            className="h-10 w-20 tracking-widest font-medium bg-black text-white rounded hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"
            onClick={Clear}
          >
            Clear
          </button>
          <button
            className="h-10 w-20 tracking-widest font-medium bg-black text-white rounded hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
