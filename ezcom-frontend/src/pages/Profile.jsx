import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { red, blue, pink } from '@mui/material/colors';
import InstagramIcon from '@mui/icons-material/Instagram';

function Profile() {
    const [user, serUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("access-token");
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/user/user`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                console.log(response.data);

                serUser(response.data);
                // setSpec(responseSpec.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }
        
        fetchData();
    }, []);
    console.log("user : ",user)
    // console.log(data);

    // console.log(id)
    return (
        <div className="bg-back">
            <Nav />
            <div className="container mx-auto px-4 py-8">
                <div className="container mx-auto px-4 py-8">
                    <div className="h-[400px] flex flex-wrap justify-center ">
                        <div className="w-[20%] h-full bg-primary flex justify-center items-center rounded-s-lg">
                            {/* Left column for name and profile picture */}
                            <div className="flex items-center space-x-4 flex-col">
                                <img
                                    className=" w-40 h-40 rounded-full"
                                    src={user.File}
                                    alt="Profile Pic"
                                />
                                <div className=" mt-6 flex flex-col text-center ">
                                    <div className="text-2xl font-semibold">{user.Name}</div>
                                    <div>{user.Role && <span>({user.Role})</span>}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] h-full rounded-e-lg bg-300">
                            {/* Right column for additional information */}
                            <div className="  p-4 h-full flex flex-col gap-y-4 w-[100%]">
                                <div className="flex flex-col">
                                    <div className="font-semibold">Information</div>

                                    <div className="mt-2 flex justify-between px-10 ">
                                        <div className="flex flex-col  ">
                                            <div className="text-xl font-bold">Email:</div>
                                            <div className="text-200">{user.Email}</div>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="text-xl font-bold">Name:</div>
                                            <div className="text-200">{user.Name}</div>
                                        </div>
                                        <div className="flex flex-col justify-betw ">
                                            <div className="text-xl font-bold">Point:</div>
                                            <div className="text-200">{user.Point}</div>
                                        </div>
                                    </div>
                                    
                                </div>


                                <div>
                                    <div className="font-semibold">Location</div>

                                    <div className="mt-2 flex justify-normal px-10 gap-x-10">
                                        <div className="flex flex-col justify-normal  ">
                                            <div className="text-xl font-bold">Address:</div>
                                            <div className="text-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis illum, nisi blanditiis tempore est cumque aliquam iure ex? Saepe!</div>
                                        </div>
                                        <div className="flex flex-col  w-[70%]">
                                            <div>Phone:</div>
                                            <div className="text-200">123-456-7890</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col ">
                                    <div className=" text-xl font-bold">social media</div>
                                    <div className="flex  gap-3 mt-2">
                                        <a href="#"><GoogleIcon fontSize="large" sx={{ color: red[600] }} /></a>
                                        <a href="#"><FacebookIcon fontSize="large" sx={{ color: blue[600] }} /></a>
                                        <a href="#"><InstagramIcon fontSize="large" sx={{ color: pink[600] }} /></a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
