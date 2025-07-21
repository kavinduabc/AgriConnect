import { MdGrass, MdOutlineLocalFlorist } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-10 mx-10">

        <div className="flex items-center gap-2">
             <div className="text-green-700 flex items-center gap-2">
               
                <MdOutlineLocalFlorist className="bg-green-700 text-white h-[49px] w-[49px] p-1 rounded-[5px]" />
                <div className="felx-col">
                   <h3 className="text-[25px] font-bold">AgriConnect</h3>
                   <h6 className="text-[15px] text-green-500 font-bold">කෘෂි සම්බන්ධතා වේදිකාව</h6>
                </div>
             </div>
        </div>
        <div className="flex items-center gap-4 text-[22px]">
          <div className="flex items-center gap-4 text-green-600 ">
            <h3>Features</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>

          <div className="bg-green-600 text-white font-bold px-4 py-2 rounded-md">
            <button className="w-full">Login</button>
          </div>

        </div>
    </div>
  )
}

export default Header