import pic from '../../img/testPic.png'
import {data} from '../../content/detail'
const SellCard = () =>{
    return (
        <div className="flex flex-col w-[200px] h-[250px]  bg-100 p-2 rounded-xl">
            <div className='flex bg-300 rounded-xl '>
                <img src={pic} alt="" />
            </div>
            <div className='mt-2 text-400'>{data.nameProduct}</div>
            <div className='mt-5 text-xl ml-2 text-primary'>{data.priceLowSell}</div>
        </div> 
    ) 
}

export default SellCard;