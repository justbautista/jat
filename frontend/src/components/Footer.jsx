import React from "react";
import JATlogo from "../../images/JAT.png"

function Footer() {
  return (
    <footer className="bg-slate-600 text-black fixed bottom-0 w-full p-4">
      <div className="container mx-auto text-center">
        <p>&copy; JAT Group 2023</p>
        <a href="https://github.com/justbautista/jat">Github</a>
      </div>
    </footer>
  );
}

export default Footer;