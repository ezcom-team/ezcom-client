import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";


const ModalEdit = ({ user, isBuyModalOpen, setisBuyModalOpen }) => {
  const [formData, setFormData] = useState(user);


  function showToast(bool, text) {
    if (bool) {
      toast.success(text)
    }
    else
      toast.error(text)

  }

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
    // console.log("formDataSubmit",data)
    console.log("formDataSubmit",formData)
    sendData(data);
  }

  const sendData = async (data) => {
    console.log("form data :", data);
    const token = localStorage.getItem("access-token");
    try {
        console.log("color is " + " : " + data.color);
        // สร้าง request ด้วย Axios

        const response = await axios.put(
            `https://ezcom-backend-production-09b5.up.railway.app/user/${user.ID}`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: token,
                },
            }
        );
        console.log(response.data);
    } catch (error) {
      showToast(false,"Error sending request")
        // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
        console.error("Error sending request:", error);
    }
};

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let data = new FormData(); // สร้าง FormData ใหม่

//     labels.map((label) => {
//         // temp = label.id;
//         console.log("check : ", label.id, formData[label.text]);
//         if (label.id === "color") {
//             colors.forEach((element) => {
//                 data.append(label.id, element);
//             });
//         } else data.append(label.id, formData[label.text]);
//     });
//     data.append("specs", item.Specs);
//     console.log("check : ", "specs", item.Specs);

//     // ส่ง FormData ไปยังเซิร์ฟเวอร์
//     console.log("before sens :", data);
//     sendData(data);
//     setIsOpen(false);
// };

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
