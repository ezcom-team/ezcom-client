
import { data } from "../../content/detail";
import p2 from '../../img/p2.jpg'
import { useState, useEffect } from "react";



const AccountDetail = ({ order }) => {
    return (
        <div className="grid grid-cols-[15%_30%_15%_15%_10%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex align-middle pl-2">
                <div className="my-auto flex gap-2 text-2xl text-primary j">
                    <div className="flex justify-center">09128091</div>
                </div>
            </div>
            
            <div className="flex align-middle ">
                <div className="h-20 ml-5">
                    <img src={p2} className='max-h-full max-w-full' />
                </div>
                <div className="my-auto ">
                    <div className='ml-2 text-xl'>
                        Napong keha
                    </div>
                    
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-100 text-2xl">
                    <div className="">test@test.test</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="my-auto ">Admin</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2 round">
                    <a className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600" href='#'>
                        Edit
                    </a>

                </div>
            </div>
        </div>
    )
}
export default AccountDetail;