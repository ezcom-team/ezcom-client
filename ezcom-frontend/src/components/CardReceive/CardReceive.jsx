// import React, { useState } from "react";
// // import "./index.css";
// // import { Link } from "react-router-dom";

// export const CardReceive = ({ price, image, name, setActive }) => {
//     const [isActive, setIsActive] = useState(false);

//     const handleActive = () => {
//         setActive();
//         setIsActive(true);
//     };
    
//     return (
//         <div
//             onClick={handleActive}
//             className={`m-5 w-52 h-[240px] p-2 bg-300 hover-drop-shadow shadow-lg hover:shadow-black rounded-lg flex justify-center cursor-pointer `}
//         >
//             <div className="grid place-items-center">
//                 <div className="m-0 w-28 h-28 flex justify-center">
//                     <img src={image} />
//                 </div>
//                 <div className="text-100 text-lg text-center">
//                     <div>{name}</div>
//                     <div>
//                         ฿ <span className="text-primary">{price}.-</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


import React, { useState, useRef } from "react";

export const CardReceive = ({ price, image, name, setActive }) => {
    const [isFocused, setIsFocused] = useState(false);
    const divRef = useRef(null);

    const handleActive = () => {
        setActive();
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            ref={divRef}
            onClick={handleActive}
            className={`m-5 w-52 h-[240px] p-2 bg-300 hover-drop-shadow shadow-lg hover:shadow-black rounded-lg flex justify-center cursor-pointer ${
                isFocused ? 'border-[2px] border-primary' : ''
            }`}
            tabIndex="0" // This makes the div focusable
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div className="grid place-items-center">
                <div className="m-0 w-28 h-28 flex justify-center">
                    <img src={image} />
                </div>
                <div className="text-100 text-lg text-center">
                    <div>{name}</div>
                    <div>
                        ฿ <span className="text-primary">{price}.-</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
