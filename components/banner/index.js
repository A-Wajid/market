import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";
import Image from 'next/image';
const Banner = () => {
    // map_loop_for_cards
    let cards = [
        {
            id: 1,
            heading: "Technology",
            image: "/images/computer.png",
            text: "View more"
        },
        {
            id: 2,
            heading: "Crypto",
            image: "/images/crypto.png",
            text: "View more"
        },
        {
            id: 3,
            heading: "Industrials",
            image: "/images/industrials.png",
            text: "View more"
        },
        {
            id: 4,
            heading: "Healthcare",
            image: "/images/health.png",
            text: "View more"
        }]
    // map_loop_for_slider
    let slider = [
        {
            id: 1,
            image: "/images/gme.png",
            heading: "GameStop",
            text: "NYSE: GME"
        },
        {
            id: 2,
            image: "/images/tsl.png",
            heading: "TSL",
            text: "NYSE: GME"
        },
        {
            id: 3,
            image: "/images/bt.png",
            heading: "BIT",
            text: "NYSE: GME"
        },
        {
            id: 4,
            image: "/images/man.png",
            heading: "ETH",
            text: "NYSE: GME"
        },
        {
            id: 5,
            image: "/images/man.png",
            heading: "ETH",
            text: "NYSE: GME"
        },
    ]
    return (
        <div>
            {/* banner_main_div */}
            <div className="w-[1543px] pt-[48px] pb-[66px] pl-[55px] pr-[57px] ">
                {/* top_section */}
                <div>
                    {/* heading_div */}
                    <div>
                        <h1 className="text-center text-gray-50 text-3xl font-semibold">Trending Markets</h1>
                    </div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        navigation={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 0,
                            depth: 130,
                            modifier: 1,
                            stretch: 0,
                            slideShadows: false,

                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="mySwiper"
                    >
                        {/* card_1 */}
                        {/* cards_div */}
                        {slider?.map((single, index) => (
                                <SwiperSlide key={single.id} >
                                    <div className="un_active_cards  mt-8 rounded-xl bg-color">
                                        <div className="py-[30px]">
                                            {/* card_header_div */}
                                            <div className="flex justify-between px-8 ">
                                                {/* left_side_div */}
                                                <div className="flex items-center">
                                                    {/* image_div */}
                                                    <div>
                                                        <Image src={single.image} />
                                                    </div>
                                                    {/* text_div */}
                                                    <div className="pl-2">
                                                        <p className="text-xl font-semibold text-white">{single.heading}</p>
                                                        <p className="text-xs font-normal text-white pt-2">{single.text}</p>
                                                    </div>
                                                </div>
                                                {/* right_side_div */}
                                                <div>
                                                    <div className="follow w-full rounded-2xl">
                                                        {/* image_text */}
                                                        <div className="flex items-center py-2 px-[18px]">
                                                            <div>
                                                                <Image src="/images/add.png" alt="" className="pr-1" />
                                                            </div>
                                                            <p className="text-sm font-semibold text-white">Follow</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* middle_section */}
                                            <div className='flex justify-between px-8 pt-[32px]' >
                                                {/* text_div */}
                                                <div>
                                                    <p className='text-xl font-semibold text-white'>$234.84</p>
                                                    <p className='text-sm font-normal text-white pt-[9px]'>Stock price today</p>
                                                </div>
                                                {/* image_div */}
                                                <div>
                                                    <Image src='/images/path.png' />
                                                </div>
                                            </div>
                                            {/* last_section */}
                                            <div className='flex justify-between px-8 pt-8'>
                                                {/* left */}
                                                <div className='flex'>
                                                    <p className='text-xs font-semibold text-white'>+9.85%</p>
                                                    <p className='text-xs font-normal text-white pl-2'>Increase in stock today</p>
                                                </div>
                                                {/* middle */}
                                                <div className='flex'>
                                                    <div>
                                                        <Image src='/images/users.png' alt='' />
                                                    </div>
                                                    <p className='text-xs font-normal text-white pl-2'>12M Followers</p>
                                                </div>
                                                {/* last */}
                                                <div className='flex'>
                                                    <div>
                                                        <Image src='/images/eye.png' alt='' />
                                                    </div>
                                                    <p className='text-xs font-normal text-white pl-2'>2M Views</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* border_bottom */}
                <div className="flex justify-center pt-12">
                    <div className="border-b border-b-solid border-b-gray-800 w-full"></div>
                </div>
                {/* down_section */}
                <div className="pt-12 px-[117px] pb-[66px]">
                    {/* heading_div */}
                    <div className="pb-9">
                        <h1 className="text-center text-gray-50 text-3xl font-semibold">Popular Industries</h1>
                    </div>
                    {/* cards_div */}
                    <div className="flex justify-center">
                        {/* card_1 */}
                        {cards?.map((single, index) => (
                            <div key={index}>
                                <div className="bg-gray-800 w-[203px] h-[196px] rounded-xl mr-5">
                                    {/* heading_div */}
                                    <div>
                                        <p className="text-white text-lg font-semibold text-center pt-[26px] pb-4">{single.heading}</p>
                                    </div>
                                    {/* image_div */}
                                    <div className="w-full flex justify-center">
                                        <div className=" border border-solid border-[#4B5563] w-[76px] h-[76px] rounded-[50px]">
                                            {/* image */}
                                            <div className="flex items-center h-full w-full justify-center">
                                                <Image src={single.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* text_div */}
                                    <div className="pt-4 pb-8">
                                        <p className="text-xs font-normal text-white text-center">{single.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;