// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded focus:outline-none"
//         onClick={toggleDropdown}
//       >
//         Condition
//       </button>
//       {isOpen && (
//         <div className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg">
//           {/* Dropdown items */}
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//           >
//             90%+
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//           >
//             80%-90%
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//           >
//             70%-80%
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute mt-2 w-48 bg-white border rounded shadow-lg transition ease-in-out duration-300`}
      >
        {/* Dropdown items */}
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        >
          Item 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        >
          Item 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        >
          Item 3
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
