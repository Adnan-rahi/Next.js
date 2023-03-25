import { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 bottom-0 w-1/5 bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer content goes here */}
      </div>
      <button
        className="fixed right-0 top-0 bottom-0 w-full bg-gray-900 bg-opacity-50"
        onClick={toggleDrawer}
      />
    </>
  );
};

export default Drawer;
