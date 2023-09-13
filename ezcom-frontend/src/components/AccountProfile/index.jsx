import React, { useState } from 'react';
import pic from '../../img/p1.jpg'
function index() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left ">
            <button
                onClick={toggleDropdown}
                type="button"
                className="px-4 py-2 font-medium text-white bg-primary border-[2px] border-transparent hover:border-orange-700 rounded-md  focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
            >
                <div className="h-[35px] flex">
                    <img src={pic} className="max-h-full max-w-full rounded-full mr-2 " />
                    <div className='my-auto text-xl'>Napong</div>
                </div>
                
            </button>

            {/* Apply transition classes to create animation */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } absolute right-0 mt-2 w-48 bg-200 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out`}
            >
                <ul className="py-2">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Log out
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default index;