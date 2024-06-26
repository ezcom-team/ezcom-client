import React from "react";

function Sidebar() {
  return (
    <div className="fixed left-0 w-64 h-full overflow-y-auto text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">Menu</h1>
      </div>

      <nav className="p-4 ">
        <ul className="">
          <li className="mb-2">
            <a href="#" className="text-100 hover:text-200">
              Graph
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-100 hover:text-200">
              Product
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-100 hover:text-200">
              Order
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-100 hover:text-200">
              User
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
