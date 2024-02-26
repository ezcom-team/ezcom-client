import React, { useState } from 'react';
import "./style.css"
import ModalEdit from '../Modal/ModalEdit';


const AccountDetail = ({ user, openModalBuy }) => {
    const userid = user.ID.slice(-5);
    const [isBuyModalOpen, setisBuyModalOpen] = useState(false);

    const openModalEdit = () => {
        setisBuyModalOpen(true)
    }

    if (!user.File) {
        user.File = "https://media.discordapp.net/attachments/1161860132708286487/1203693258178301952/067a2c0aa638eda14ce4e86b9a9318a9.png?ex=65e47ab4&is=65d205b4&hm=fb9107410c39e8ff9ddc8e2028d4bd2e7d23f18d12984cb1604f3a0904fccf4c&=&format=webp&quality=lossless&width=495&height=676"
    }
    console.log(" accountde" + user)

    return (

        <div className="grid grid-cols-[15%_30%_15%_15%_10%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex align-middle pl-2">
                <div className="my-auto flex gap-2 text-2xl text-primary j">
                    <div className="flex justify-center">{userid}</div>
                </div>
            </div>

            <div className="flex align-middle ">
                <div className="h-20 ml-5">
                    <img src={user.File} className='max-h-full max-w-full' />
                </div>
                <div className="my-auto ">
                    <div className='ml-2 text-xl'>
                        {user.Name}
                    </div>

                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-100 text-2xl">
                    <div className="">{user.Email}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="my-auto ">{user.Role}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2 round">
                    {/* Add onClick event to open the modal */}
                    <a className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600"
                        onClick={() => openModalEdit(user)}

                    >
                        Edit
                    </a>

                </div>
            </div>

            <ModalEdit
                user={user}
                isBuyModalOpen={isBuyModalOpen}
                setisBuyModalOpen={setisBuyModalOpen}
            />
        </div>
    )
}
export default AccountDetail;