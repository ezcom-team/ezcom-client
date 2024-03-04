import React, { useState } from "react";
import ModalEdit from "../Modal/ModalEdit";

const AccountDetail = ({ user, openModalBuy }) => {
  const userid = user.ID.slice(-5);
  const [isBuyModalOpen, setisBuyModalOpen] = useState(false);

  const openModalEdit = () => {
    setisBuyModalOpen(true);
  };

  if (!user.File) {
    user.File = "https://github.com/identicons/sumetsm.png";
  }
  console.log(" accountde" + user);

  return (
    <div className="grid grid-cols-[20%_25%_25%_10%_10%_10%]  bg-300 py-3 mb-[8px] rounded-md ">
      <div className="flex pl-2 align-middle">
        <div className="flex gap-2 my-auto text-xs text-100 j">
          <div className="flex justify-center">{user.ID}</div>
        </div>
      </div>

      <div className="flex align-middle ">
        <div className="w-10 h-10">
          <img src={user.File} className="max-w-full max-h-full" />
        </div>
        <div className="my-auto ">
          <div className="ml-2 text-base text-100">{user.Name}</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="my-auto text-base text-100">
          <div className="">{user.Email}</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="flex gap-2 my-auto">
          <div className="my-auto text-base text-100">{user.Role}</div>
        </div>
      </div>

      <div className="flex justify-center align-middle">
        <button className="flex gap-2 my-auto round">
          <a
            className="px-4 py-1 text-base text-green-600 rounded-md bg-300 px-auto py-auto hover:bg-green-600 hover:text-100"
            onClick={() => openModalEdit(user)}
          >
            edit
          </a>
        </button>
      </div>

      <div className="flex align-middle">
        <button className="flex gap-2 my-auto round">
          <a
            className="px-4 py-1 text-base text-red-600 rounded-md bg-300 px-auto py-auto hover:bg-red-600 hover:text-100"
            onClick={() => openModalEdit(user)}
          >
            delete
          </a>
        </button>
      </div>

      <ModalEdit
        user={user}
        isBuyModalOpen={isBuyModalOpen}
        setisBuyModalOpen={setisBuyModalOpen}
      />
    </div>
  );
};
export default AccountDetail;
