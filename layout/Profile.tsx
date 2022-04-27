import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="bg-white overflow-hidden rounded-2xl shadow-2xl">
      <div className="bg-blue-500 p-6 pb-14">
        <span className="text-white text-2xl">Profile</span>
      </div>

      <div className="rounded-3xl p-6 bg-white relative -top-5">
        <div className="flex relative -top-16 items-end justify-between">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400">Orders</span>
            <span className="font-medium">340</span>
          </div>
          <div className="h-24 w-24 bg-red-400 rounded-full" />
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400">spent</span>
            <span className="font-medium">$2,310</span>
          </div>
        </div>
        <div className="relative  flex flex-col items-center -mt-10 -mb-5">
          <span className="text-lg font-medium">Tony Molloy</span>
          <span className="text-sm text-gray-500">New York, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
