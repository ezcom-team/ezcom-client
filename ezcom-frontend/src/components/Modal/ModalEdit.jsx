import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";


const ModalEdit = ({ user, isBuyModalOpen, setisBuyModalOpen }) => {
  const [formData, setFormData] = useState(user);


  const closeModal = () => {
    setisBuyModalOpen(false);
  };

  const handleSubmit =(e) =>{
    let data = new FormData();
    data.append("name",formData.Name)
    data.append("email",formData.Email)
    data.append("role",formData.Role)
    data.append("file",formData.File)
    e.preventDefault()
    console.log("formDataSubmit",data)
  }

  const handleInputChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const handleInputFileChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.id]: event.target.files[0],
    });
  }
  console.log("modalEdit:",user.Name)
  return (
    <div>
      {isBuyModalOpen && (
        <div className="modal ">
          <div className="bg-400 p-6 ">
            <div className="flex justify-center text-2xl text-100">
              <span>Edit User Profile</span>
            </div>

            <div className="flex flex-col gap-4 p-2 mt-3 text-100">
              
              <form >
              <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
              <img
                    src={user.File}
                    className=" max-h-[100px]"
                    alt="Product Image"
                  />
                  <input type="file" id="File" name="avatar" accept="image/png, image/jpeg" className="px-1 pl-2 rounded-sm bg-400 text-100" onChange={handleInputFileChange}/>
                  
                </div>

                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Name</div>
                  <input
                    type="text"
                    value={formData.Name}
                    id = "Name"
                    onChange={handleInputChange}
                    className="px-1 pl-2 rounded-sm bg-400 text-100"
                  ></input>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Email</div>
                  <input
                    type="text"
                    value={formData.Email}
                    id = "Email"                  
                    onChange={handleInputChange}
                    className="px-1 pl-2 rounded-sm bg-400 text-100"
                  ></input>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Role</div>
                  <input
                    type="text"
                    value={formData.Role}
                    id = "Role"
                    onChange={handleInputChange}
                    className="px-1 pl-2 rounded-sm bg-400 text-100"
                  ></input>
                </div>
    
                <div className="flex justify-center gap-5 mt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-700 text-200"
                  >
                    <span>Confirm</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-40 p-2 transition rounded bg-primary hover:bg-orange-700 text-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>  
      )}
    </div>
  );
};

export default ModalEdit;
