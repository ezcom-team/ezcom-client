import SellCard from './SellCard'

const Sell = () =>{
    return(
        <div className='h-full  min-w-full  gap-2 bg-400 p-5 rounded-md'>
            <div className="grid grid-cols-[30%_12%_10%_10%_20%_10%]  text-100 rounded-md pl-5">
                <div className='flex'>Items</div>
                <div className='flex'>Price</div>
                <div className='flex'>LastSell</div>
                <div className='flex justify-center'>Type</div>
                <div className='flex justify-center'>Create Time</div>
                <div className='flex justify-center'>Status</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            <SellCard />
            <SellCard />
            <SellCard />
        </div>
    )
}
export default Sell