import React from "react";
import JATlogo from "../../images/JAT.png"
import "../styles/NavBar.css"

function NavBar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
      <a href="#"><img src={JATlogo} alt="JAT logo" className="w-30 h-20" /></a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-black">Home</a></li>
          <li><a href="#" className="text-black">About</a></li>
          <li><a href="#" className="text-black">How It Works</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;