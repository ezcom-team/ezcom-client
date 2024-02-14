import { useEffect, useState } from 'react';
import axios from 'axios';
import AccountDetail from './AccountDetail';

const Account = () =>{
    return(
        <div className="max-w-[75vw] mx-auto mt-10 ">

            <div className="grid grid-cols-[15%_30%_15%_15%_15%] mb-4 text-100">
                <div className="ml-5">id</div>
                <div className="">name</div>
                <div className="">email</div>
                <div className="">role</div>
                <div className=""></div>
            </div>
            <AccountDetail />
        </div>
    )
}

export default Account;


