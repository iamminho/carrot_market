import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 grid gap-10 ">
      <div className="bg-white p-6 rounded-3xl shadow-2xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-500 my-2">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
          Checkout
        </div>
      </div>

      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl">
          <div className='bg-blue-500 p-6 pb-14'>
            <span className='text-white text-2xl'>Profile</span>
          </div>

            <div className='rounded-3xl p-6 bg-white relative -top-5'>
              <div className='flex relative -top-16 items-end justify-between'>
                <div className='flex flex-col items-center'>
                  <span className='text-sm text-gray-400'>Orders</span>
                  <span className='font-medium'>340</span>
                </div>
                <div className='h-24 w-24 bg-red-400 rounded-full'  />
                <div className='flex flex-col items-center'>
                  <span className='text-sm text-gray-400'>spent</span>
                  <span className='font-medium'>$2,310</span>
                </div>
              </div>
              <div className='relative  flex flex-col items-center -mt-10 -mb-5'>
                <span className='text-lg font-medium'>Tony Molloy</span>
                <span className='text-sm text-gray-500'>New York, USA</span>
              </div>
            </div>
          
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-2xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-2xl"></div>
    </div>
  );
};

export default Home
