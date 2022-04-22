const SideNavLeft = () => {
    return (
        <div>
        <div className="container absolute inset-0">
          <div className=" w-[306px]">
            <div className="bg-gray-800 w-[88px] h-[832px] rounded-tr-xl rounded-xl mt-[94px]">
                {/* sid_nav_main_div */}
                <div>
                    {/* up_side_div */}
                    <div >
                        {/* home_image_text_div */}
                        <div className="flex items-center pt-6 pl-8 ">
                            {/* img_div */}
                            <img src="/images/home.png" alt=""  />
                        </div>
                        {/* explore_image_text_div */}
                        <div className="bg-[#0284C7] rounded-xl  my-5 mx-3 h-12 ">
                            <div className="flex items-center h-full justify-center">
                                {/* img_div */}
                                <img src="/images/explore.png" alt=""  />
                            </div>
                        </div>
                        {/* leaderboard_image_text_div */}
                        <div className="flex items-center pt-3 pb-6 pl-8 ">
                            {/* img_div */}
                            <img src="/images/trophy.png" alt="" />
                        </div>
                        <div className="border-b border-b-solid border-b-gray-700 mx-1"></div>
                    </div>
                    {/* middle_div */}
                    <div>
                        {/*protfolio_image_text_div */}
                        <div className="flex items-center py-[30px] pl-8 ">
                            {/* img_div */}
                            <img src="/images/trending.png" alt=""/>
                        </div>
                        <div className="border-b border-b-solid border-b-gray-700 mx-1 "></div>
                    </div>
                    {/* last_div */}
                    <div>
                        {/*Following_image_text_div */}
                        <div className="flex items-center pt-6 pb-4 pl-8 ">
                            {/* img_div */}
                            <img src="/images/heart.png" alt="" />
                        </div>
                        {/* car_text_div */}
                        <div className=" pl-8">
                            {/* heading_images_div */}
                            <div >
                                {/* gme_div */}
                                <div>
                                    {/* image_txt */}
                                    <div className="flex items-center pb-4">
                                        <img src="/images/Ellipse.png" alt="" /> </div>
                                </div>
                                {/* Tsla_div */}
                                <div>
                                    {/* image_txt */}
                                    <div className="flex items-center pb-4">
                                        <img src="/images/tesla.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* crypto_text_div */}
                        <div className=" pl-8">
                            {/* heading_images_div */}
                            <div >
                                {/* bit_div */}
                                <div>
                                    {/* image_txt */}
                                    <div className="flex items-center pb-4">
                                        <img src="/images/bitcoin.png" alt="" />
                                    </div>
                                </div>
                                {/* eth_div */}
                                <div>
                                    {/* image_txt */}
                                    <div className="flex items-center pb-4">
                                        <img src="/images/eth.png" alt="" />
                                    </div>
                                </div>
                                {/* doge_div */}
                                <div>
                                    {/* image_txt */}
                                    <div className="flex items-center pb-4">
                                        <img src="/images/doge.png" alt="" />
                                    </div>
                                </div>
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
export default SideNavLeft;