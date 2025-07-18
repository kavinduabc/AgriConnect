import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-2">
            <FaLeaf className="text-white bg-green-600 rounded-full p-1 w-6 h-6" />
            <span className="font-bold text-lg ml-2">AgriConnect</span>
          </div>
          <p className="text-sm">
            Empowering Sri Lankan farmers with technology and direct market access.
          </p>
        </div>

        {/* For Farmers */}
        <div>
          <h3 className="font-semibold mb-2">For Farmers</h3>
          <ul className="space-y-1 text-sm">
            <li>Farmer Portal</li>
            <li>Market Prices</li>
            <li>Farming Tips</li>
          </ul>
        </div>

        {/* For Buyers */}
        <div>
          <h3 className="font-semibold mb-2">For Buyers</h3>
          <ul className="space-y-1 text-sm">
            <li>Buyer Portal</li>
            <li>Marketplace</li>
            <li>Wholesale</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </div>
      </div>
 
       <hr className="text-green-50 mt-4" />
      
      <div className="border-t border-green-900 mt-8 pt-4 text-center text-sm text-gray-200">
        © 2024 AgriConnect. Built for Sri Lankan farmers with 
      </div>
    </footer>
  );
};

export default Footer;
