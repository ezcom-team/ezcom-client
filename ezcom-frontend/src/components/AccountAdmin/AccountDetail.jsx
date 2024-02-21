import picProduct from "../../img/testPic.png";
import { data } from "../../content/detail";
import p2 from "../../img/p2.jpg";
import { useState, useEffect } from "react";

const AccountDetail = ({ order }) => {
  return (
    <div className="grid grid-cols-[15%_30%_15%_15%_10%] bg-300 text-200 py-3 mb-1 ">
      <div className="flex pl-2 align-middle">
        <div className="flex gap-2 my-auto text-2xl text-primary j">
          <div className="flex justify-center">09128091</div>
        </div>
      </div>

      <div className="flex align-middle ">
        <div className="h-20 ml-5">
          <img src={p2} className="max-w-full max-h-full" />
        </div>
        <div className="my-auto ">
          <div className="ml-2 text-xl">Napong keha</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="my-auto text-2xl text-100">
          <div className="">test@test.test</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="flex gap-2 my-auto">
          <div className="my-auto ">Admin</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="flex gap-2 my-auto round">
          <a
            className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600"
            href="#"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};
export default AccountDetail;
