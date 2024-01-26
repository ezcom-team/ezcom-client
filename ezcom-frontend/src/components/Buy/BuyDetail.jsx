import p1 from '../../img/p1.jpg'

const BuyDetail = ({ conditions, colors, buyerName, price }) => {

    console.log(colors)
    return (
        <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
            <div className="flex align-middle">
                {conditions.map((condition) => (
                    <div className='flex justify-center mx-1 border-[1px] p-[2px] border-100 rounded-3xl w-[44px] h-[28px]'>
                        {condition}
                    </div>
                ))}
            </div>
            <div className="flex align-middle">
                <div className="my-auto">
                    <div className="flex">
                        {colors.map((color) => (
                            <div className='flex justify-center m-1 border-[1px] p-[4px] border-100 rounded-3xl w-[60px] h-[32px]' >
                                {color}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="h-10 ">
                        <img src={p1} className="max-h-full max-w-full rounded-full" />
                    </div>
                    <div className="my-auto ">{buyerName}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto  text-2xl text-primary">
                    <div className=""> ฿ {price}</div>
                </div>
            </div>
            <div className="flex align-middle my-auto">
                <a
                    className=" border-[2px] border-primary hover:bg-orange-600 px-8 py-2 rounded-md duration-500"
                    href="#"
                >
                    Sell
                </a>
            </div>
        </div>
    );
};
export default BuyDetail;
