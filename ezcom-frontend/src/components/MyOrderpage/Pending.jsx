import PendingCard from './PendingCard'

const Pending = () => {
    return (
        <div className='h-full  min-w-full flex flex-col gap-2 bg-200 p-5 rounded-b-md'>
            <div className="grid grid-cols-[12%_12%_12%_40%_20%]  text-400 rounded-md pl-5">
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