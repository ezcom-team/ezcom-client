import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountDetail from "./AccountDetail";
import ModalEdit from "../Modal/ModalEdit";
import { Loading } from "../Loading/Loading";

const Account = ({ openModalBuy }) => {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const token = localStorage.getItem("access-token");
                const [userData] = await Promise.all([
                    axios.get(
                        `https://ezcom-backend-production-09b5.up.railway.app/user/users`,
                        {
                            headers: {
                                Authorization: token,
                            },
                        }
                    ),
                ]);
                setUsers(userData.data); // Corrected line
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-[75vw] mx-auto p-2">
            <div className="grid grid-cols-[20%_25%_25%_10%_10%_10%] mb-4 text-200 text-base">
                <div className="ml-5">id</div>
                <div className="">name</div>
                <div className="">email</div>
                <div className="">role</div>
                <div className=""></div>
            </div>
            {loading ? (
                <div className="my-[120px] h-full overflow-y-scroll place-items-center">
                    <Loading />
                </div>
            ) : (
                <div>
                    {users ? (
                        <div>
                            {users.map((user) =>
                                user.Name ? (
                                    <AccountDetail
                                        user={user}
                                        openModalBuy={openModalBuy}
                                    />
                                ) : null
                            )}
                        </div>
                    ) : (
                        <div className="text-100 flex justify-center mt-[64px]">
                            No User
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Account;
