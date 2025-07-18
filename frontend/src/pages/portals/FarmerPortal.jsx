import React from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { IoIosNotificationsOutline } from "react-icons/io";
import Details from '../../SubComponents/Details';

const FarmerPortal = () => {
  return (
    <div className='flex flex-col p-4'>
        <div className='flex justify-between shadow-md p-2  '>
            <div className='flex gap-4 items-center'>
                <img src="user.jpg" alt="farmer" className='w-[70px] h-[70px] rounded-full' />
            <div className='flex flex-col '>
                <h1 className='text-[25px] text-green-800 font-bold'>Welocome,<span>Kamal Perera</span></h1>
                <h5 className='text-[14px] text-gray-600 flex'>Tea Farmer, <span> Kandy</span></h5>
            </div>
            </div>

            <div className='flex gap-4 items-center text-green-800'>
               <IoIosNotificationsOutline className='text-[25px]  border border-green-100   rounded-lg'/>
               <div>
                <select
                  className="border border-green-100 rounded-lg px-3 py-2"
                 defaultValue=""
                 onChange={(e) => console.log("Selected:", e.target.value)}
               >
                 
                 <option value="english">English</option>
                 <option value="sinhala">Sinhala</option>
                 <option value="tamil">Tamil</option>
                </select>

               </div>
            </div>    
        </div>
        
             <div className='flex justify-between items-center mt-4 text-green-800  p-1'>
                <h4 className='hover:text-white hover:bg-green-800 p-2 rounded-[3px]'>Dashbord</h4>
                <h4 className='hover:text-white hover:bg-green-800 p-2 rounded-[3px]'>Market Prices</h4>
                <h4 className='hover:text-white hover:bg-green-800 p-2 rounded-[3px]'>My Listings</h4>
                <h4 className='hover:text-white hover:bg-green-800 p-2 rounded-[3px]'>Guidance</h4>
            </div>

            <div className=' flex  gap-4 mt-5 items-center  justify-center  '>
                <Details  headin={'Active Listings'} total={'3'} time={'1 this week'}/>
                <Details  headin={'Total Inquiries'} total={'3'} time={'1 this week'}/>
                <Details  headin={'This Month Sales'} total={'3'} time={'1 this week'}/>
            </div>

            <div className='flex  flex-col  gap-4 mt-5 shadow-md rounded-lg p-4 '>
                <h1 className='text-[20px] text-green-800 font-bold '>Recent Activity</h1>
                <div className='flex flex-col mx-3'>
                    <div className='shadow-md p-2 rounded-lg text-green-700'>
                        <h3 className='text-[17px]'>New inquiry for Tea Leaves</h3>
                        <p className='text-[13px] '>Hotel Cinamon  Grand</p>
                    </div>
                    <div className='shadow-md p-2 rounded-lg text-green-700'>
                        <h3 className='text-[17px]'>New inquiry for Tea Leaves</h3>
                        <p className='text-[13px] '>Hotel Cinamon  Grand</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FarmerPortal