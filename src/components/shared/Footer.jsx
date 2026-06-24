
import {
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        
     <footer className="bg-[#234F3F] text-white py-10">
      
      {/* Title */}
      <div className="text-center">
        <h1 className="text-6xl font-bold">KeenKeeper</h1>

        <p className="text-sm text-gray-300 mt-4">
          Your personal shelf of meaningful connections.
          Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>

      {/* Social Links */}
      <div className="text-center mt-8">
        <h3 className="font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4">
          
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
            <FaYoutube />
          </div>

          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
            <FaXTwitter />
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-500 mt-12 pt-6 px-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>

      </div>
    </footer>
        
    );
};

export default Footer;