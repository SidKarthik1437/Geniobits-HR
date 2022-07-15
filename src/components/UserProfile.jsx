import { Radio } from "@material-tailwind/react";
function UserProfile({user}) {
  return (
    <div className="bg-grey-primary w-full h-screen flex items-center justify-center">
      <div className="w-3/6 h-3/6 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
        <div className="grid grid-cols-7 px-5">
          <div className="flex flex-col col-span-2 items-center w-full">
            <div className="flex flex-col space-y-5 items-center mt-14">
              <img
                src={
                  user.data.gender === "male"
                    ? "https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846325.jpg"
                    : "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                }
                className="w-40 h-40 rounded-full object-contain shadow-2xl"
              />
              <p className="font-semibold text-xl">{user.data.name}</p>
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
              <span className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r">
                {user.data.id}
              </span>
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Fullname
              </span>
              <span className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r">
                {user.data.name}
              </span>
            </div>
            <div className="flex items-center h-10 rounded">
              <span className="text-lg bg-black text-white h-10 w-32 px-4 rounded-tl rounded-bl p-1 tracking-wider">
                Email
              </span>
              <span className="text-lg border w-full h-10 border-gray-300 pl-2 pt-1 rounded-r">
                {user.data.email}
              </span>
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
                    //
                    defaultChecked={user.data.gender === "male" ? true : false}
                  />
                </div>
                <div className="flex items-center h-10 space-x-2">
                  <span>Female</span>
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    className="text-lg border !h-10 w-5 border-gray-300 pl-2 pt-1"
                    defaultChecked={
                      user.data.gender === "female" ? true : false
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile