import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const ModalEdit = ({ user, isBuyModalOpen, setisBuyModalOpen }) => {
    const [formData, setFormData] = useState(user);
    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }
    const closeModal = () => {
        setisBuyModalOpen(false);
    };

    const handleSubmit = (e) => {
        let data = new FormData();
        data.append("name", formData.Name);
        data.append("email", formData.Email);
        data.append("role", formData.Role);
        data.append("file", formData.File);
        data.append("address", user.Address);
        data.append("phoneNumber", user.PhoneNumber);
        data.append("createdAt", user.CreatedAt);
        e.preventDefault();
        sendData(data);
        closeModal();
    };

    const sendData = async (data) => {
        const token = localStorage.getItem("access-token");
        try {
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
        } catch (error) {
            showToast(false, "Error sending request");
            // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
            console.error("Error sending request:", error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleInputFileChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.files[0],
        });
    };

    return (
        <div>
            {isBuyModalOpen && (
                <div className="modal">
                    <div className="p-6 rounded-md bg-400 border border-300">
                        <div className="flex justify-center text-2xl text-100">
                            <span>Edit User Profile</span>
                        </div>
                        <div className="flex flex-col gap-4 p-2 mt-3 text-100">
                            <form>
                                <div className="grid grid-cols-[30%_70%] p-4 bg-400 flex-row items-center">
                                    <img
                                        src={user.File}
                                        className=" max-h-[100px]"
                                        alt="Product Image"
                                    />
                                    <input
                                        type="file"
                                        id="File"
                                        name="avatar"
                                        accept="image/png, image/jpeg"
                                        className="px-1 pl-2 rounded-sm bg-400 text-100"
                                        onChange={handleInputFileChange}
                                    />
                                </div>
                                <label
                                    htmlFor="Name"
                                    className="block mb-2 text-sm font-medium text-200 dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    id="Name"
                                    type="text"
                                    value={formData.Name}
                                    className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="-"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="Email"
                                    className="block mb-2 text-sm font-medium text-200 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    id="Email"
                                    type="text"
                                    value={formData.Email}
                                    className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="-"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="Role"
                                    className="block mb-2 text-sm font-medium text-200 dark:text-white"
                                >
                                    Role
                                </label>
                                <input
                                    id="Role"
                                    type="text"
                                    value={formData.Role}
                                    className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="-"
                                    onChange={handleInputChange}
                                    required
                                />

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
