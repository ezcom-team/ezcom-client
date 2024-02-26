import PendingCard from './PendingCard'

const Pending = () => {
    return (
        <div className='flex flex-col h-full min-w-full gap-2 p-5 bg-200 rounded-b-md'>
            <div className="grid grid-cols-[12%_12%_12%_40%_20%]  text-400 rounded-md pl-5 pb-2">
                <div className='flex'>Items</div>
                <div className='flex'>Price</div>
                <div className='flex'>Buyer</div>
                <div className='flex justify-center'>Order time</div>
                <div className='flex'>Status</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            <PendingCard />
            <PendingCard />
            <PendingCard />

        </div>
    )
}
export default Pending