import { MdOutlineLocalFlorist } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-2 text-green-700">
          <MdOutlineLocalFlorist className="bg-green-700 text-white h-[49px] w-[49px] p-1 rounded-md" />
          <div className="flex flex-col">
            <h3 className="text-[25px] font-bold">AgriConnect</h3>
            <h6 className="text-[15px] text-green-500 font-bold">කෘෂි සම්බන්ධතා වේදිකාව</h6>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[18px]">
          <div className="flex items-center gap-6 text-green-700 font-semibold">
            <h3 className="hover:underline cursor-pointer">Features</h3>
            <h3 className="hover:underline cursor-pointer">About</h3>
            <h3 className="hover:underline cursor-pointer">Contact</h3>
          </div>

          <button className="bg-green-600 text-white font-bold px-4 py-2 rounded-md hover:bg-green-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
