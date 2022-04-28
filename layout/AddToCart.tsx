import type { NextPage } from "next";

const AddToCart: NextPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>★4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-400">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button 
                className="p-1.5 rounded-lg bg-blue-200
                    flex justify-center items-center aspect-square 
                    w-8 font-medium text-xl text-gray-500
                "
              >
                -
              </button>
              <span>1</span>
              <button
                className="p-1.5 rounded-lg bg-blue-200
                  flex justify-center items-center aspect-square 
                  w-8 font-medium text-xl text-gray-500
                  active:bg-yellow-300 active:text-red-600
                "
              >
              
                +
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$460</span>
              <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg hover:bg-teal-500 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddToCart
