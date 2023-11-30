import ChatCard from "./ChatCard"


const Chat = () => {
    return (
        <div className="flex flex-col items-center flex-1 bg-back  ">
            <div className="flex p-10 bg-300 mt-10 w-[70%] gap-10 rounded ">
                <div className="flex flex-col gap-10 w-[45%] border-[3px]  border-200 p-5 rounded">
                    <div className="flex justify-center text-3xl text-primary">Chat</div>
                    <div className="flex gap-2">
                        <button className="text-200 p-4 flex-grow justify-start text-lg rounded-md border-[2px] border-red-500 hover:bg-red-500 duration-500">
                            <span className="ml-1">Buy</span>
                        </button>
                        <button className="text-200 p-4 flex-grow justify-start text-lg rounded-md border-[2px] border-green-500 hover:bg-green-500 duration-500">
                            <span className="ml-1">Sell</span>
                        </button>
                    </div>
                    <ChatCard />     
                    <ChatCard />     

                </div>
                <div>putter</div>
            </div>
        </div>
    )
}
export default Chat