const SideNav = () => {
    return (
        <div>
            {/* sid_nav_main_bg */}
            <div className="bg-gray-800 w-[306px] min-h-screen rounded-tr-xl rounded-b-xl">
                {/* sid_nav_main_div */}
                <div>
                    {/* up_side_div */}
                    <div >
                        {/* home_img_text_div */}
                        <div className="flex items-center pt-6 pl-8 ">
                            {/* img_div */}
                            <img src="/images/home.png" alt="" className="pr-2" />
                            <p className="text-gray-400 text-base font-normal">HOME</p>
                        </div>
                        {/* explore_img_text_div */}
                        <div className="bg-[#0284C7] rounded-xl mt-[13px] h-12 mx-1">
                            <div className="flex items-center pl-8  pt-[5px] pb-[19px]">
                                {/* img_div */}
                                <img src="/images/compass.png" alt="" className="pr-2" />
                                <p className="text-white text-base font-normal">Explore</p>
                            </div>
                        </div>
                        {/* leaderboard_img_text_div */}
                        <div className="flex items-center pt-3 pb-6 pl-8 ">
                            {/* img_div */}
                            <img src="/images/trophy.png" alt="" className="pr-2" />
                            <p className="text-gray-400 text-base font-normal">Leaderboard</p>
                        </div>
                        <div className="border-b border-b-solid border-b-gray-700 mx-1"></div>
                    </div>
                    {/* middle_div */}
                    <div>
                        {/*protfolio_img_text_div */}
                        <div className="flex items-center pt-6 pl-8 ">
                            {/* img_div */}
                            <img src="/images/trending.png" alt="" className="pr-2" />
                            <p className="text-white text-base font-semibold">Portfolio Overview</p>
                        </div>
                        {/* value_text_div */}
                        <div className="pt-4 pl-8">
                            {/* heading_div */}
                            <div>
                                <p className="text-xs text-semibold text-gray-400">Value</p>
                                <p className="text-base font-normal text-white pt-2">$175,000</p>
                            </div>
                        </div>
                        {/* gain_loss_text_div */}
                        <div className="py-6  pl-8 flex items-center justify-between">
                            {/* heading_div */}
                            <div>
                                <p className="text-xs text-semibold text-gray-400">Today’s gain/loss</p>
                                <p className="text-base font-normal text-white pt-2">$7,400</p>
                            </div>
                            {/* color_text */}
                            <div className="pt-5 pr-7">
                                <p className="text-sm font-normal text-green-400">+2.50%</p>
                            </div>
                        </div>
                        {/* over_All_gain_loss_text_div */}
                        <div className="pb-6 pl-8 flex items-center justify-between">
                            {/* heading_div */}
                            <div>
                                <p className="text-xs text-semibold text-gray-400">Overall gain/loss</p>
                                <p className="text-base font-normal text-white pt-2">$4,300</p>
                            </div>
                            {/* color_text */}
                            <div className="pt-5 pr-7">
                                <p className="text-sm font-normal text-red-400">-4.20%</p>
                            </div>
                        </div>

                        <div className="border-b border-b-solid border-b-gray-700 mx-1 "></div>
                    </div>
                    {/* last_div */}
                    <div>
                        {/*Following_img_text_div */}
                        <div className="flex items-center pt-7 pb-[25px] pl-8 ">
                            {/* img_div */}
                            <img src="/images/heart.png" alt="" className="pr-2" />
                            <p className="text-white text-base font-semibold">Following</p>
                        </div>
                        {/* car_text_div */}
                        <div className=" pl-8">
                            {/* heading_images_div */}
                            <div >
                                <p className="text-xs text-semibold text-gray-400">U.S. Equities</p>
                                {/* gme_div */}
                                <div>
                                    {/* img_txt */}
                                    <div className="flex items-center pt-[19px]">
                                        <img src="/images/Ellipse.png" alt="" />
                                        <p className="text-sm font-normal text-white pl-2">GME</p>
                                        <p className="text-sm font-normal text-green-400 pl-16">+9.50%</p>
                                    </div>
                                </div>
                                {/* Tsla_div */}
                                <div>
                                    {/* img_txt */}
                                    <div className="flex items-center pt-[19px]">
                                        <img src="/images/tesla.png" alt="" />
                                        <p className="text-sm font-normal text-white pl-2">TSLA</p>
                                        <p className="text-sm font-normal text-red-400 pl-[65px]">-2.31%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* crypto_text_div */}
                        <div className="pt-8 pl-8">
                            {/* heading_images_div */}
                            <div >
                                <p className="text-xs text-semibold text-gray-400">Crypto</p>
                                {/* bit_div */}
                                <div>
                                    {/* img_txt */}
                                    <div className="flex items-center pt-[19px]">
                                        <img src="/images/bitcoin.png" alt="" />
                                        <p className="text-sm font-normal text-white pl-2">BTC</p>
                                        <p className="text-sm font-normal text-red-400 pl-[71px]">-5.65%</p>
                                    </div>
                                </div>
                                {/* eth_div */}
                                <div>
                                    {/* img_txt */}
                                    <div className="flex items-center pt-[19px]">
                                        <img src="/images/eth.png" alt="" />
                                        <p className="text-sm font-normal text-white pl-2">ETH</p>
                                        <p className="text-sm font-normal text-green-400 pl-[68px]">+6.36%</p>
                                    </div>
                                </div>
                                {/* doge_div */}
                                <div>
                                    {/* img_txt */}
                                    <div className="flex items-center pt-[19px]">
                                        <img src="/images/doge.png" alt="" />
                                        <p className="text-sm font-normal text-white pl-2">DOGE</p>
                                        <p className="text-sm font-normal text-green-400 pl-[55px]">+2.54%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideNav;