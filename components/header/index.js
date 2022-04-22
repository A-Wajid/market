const Header = () => {

    return (
        <div className="container">
            {/* header_bg_color*/}
            <div className="py-3">
                <div className="bg-[#1F2937] w-full h-[70px] rounded-xl">
                    {/* header_mian_content */}
                    <div className="py-3 flex items-center justify-between">
                        {/* left_side_div */}
                        <div className="flex items-center ">
                            {/* hamburger_div */}
                            <div className="px-6 ">
                                <img src="/images/hamburger.png" alt=""/>
                            </div>
                            {/* logo_text_div */}
                            <div className="flex items-center">
                                {/* logo */}
                                <div className="pr-[10px]">
                                    <img src="/images/rounded.png" alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className="text-2xl font-semibold text-white">PROJECT MARKET</h1>
                                </div>
                            </div>
                        </div>
                        {/* middle_input_div */}
                        <div>
                            <div className="w-[433px] h-[46px] rounded-xl border border-solid border-gray-700 bg-gray-700 flex items-center">
                                {/* image_div */}
                                <div className="px-[10px]">
                                    <img src="/images/vector.png" />
                                </div>
                                <input placeholder="Search for a commodity" className="w-full  bg-transparent focus:outline-none placeholder:text-white  " />
                            </div>
                        </div>
                        {/* right_side_div */}
                        <div className="flex items-center">
                            {/* mail_div */}
                            <div className="pr-4">
                                <img src="/images/mail.png" />
                            </div>
                            {/* bell_div */}
                            <div className="pr-6">
                                <img src="/images/bell.png" />
                            </div>
                            {/* man_div */}
                            <div className="pr-7">
                                <img src="/images/man.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;