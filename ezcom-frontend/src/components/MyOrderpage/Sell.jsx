import SellCard from './SellCard'

const Sell = () =>{
    return(
        <div className='h-full  min-w-full flex flex-row gap-2 bg-400 p-5 rounded-b-md'>
            <SellCard />
            <SellCard />
            <SellCard />
            <SellCard />
            <SellCard />
        </div>
    )
}
export default Sell