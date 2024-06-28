import React from "react";
import { Link } from "react-router-dom";
import { MdBookmarkBorder } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 lg:px-12 shadow-lg">
      <div className="flex items-center justify-between">
        <Link className="text-3xl font-extrabold tracking-widest hover:scale-110 transition-transform" to="/">
          THE MOVIES
        </Link>
        <nav className="flex space-x-8">
          <Link className="flex items-center gap-2 text-lg font-medium hover:text-red-500 transition-colors" to="/favorites">
            <MdBookmarkBorder size={24} color="#F6F1D3" />
            FAVORİTES
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
