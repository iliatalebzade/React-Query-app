import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Views from "./components/views/Views";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen((prevState) => {
        return prevState === true ? false : true;
      });
    }
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-200 h-screen w-screen grid lg:grid-cols-6 relative">
        <img
          onClick={toggleMenu}
          alt="burger menu icon"
          className="absolute lg:hidden h-8 w-8 right-4 top-4"
          src="/hamburger.png"
        />
        <div className="col-span-1">
          <Sidebar toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <div className="lg:col-span-5">
          <Views />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
