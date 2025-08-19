"use client"
import { useState } from "react";

export default function Header() {
    const [isOpenNavBar, setIsOpenNavBar] = useState(false)

    return (
        <header>
            <div className="block lg:flex text-[var(--color-primary)] px-[6%] py-10 items-center">
                <div className="flex gap-20 items-center lg:w-[70%]">
                    <img className="scale-70 sm:scale-80 md:scale-100 w-[90px] h-[119px]" src="/logo-tu-phap.png" alt="Logo Tư Pháp VIỆT NAM" />
                    <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] text-outline font-bold">HỖ TRỢ PHÁP LÝ CHO DOANH NGHIỆP</h1>
                </div>
                <div className="flex gap-15 ml-auto items-center md:mt-7 lg:w-[30%]">
                    <div className="relative w-[80%] lg:w-[70%]">
                        <input
                            type="text"
                            className="w-full h-[33px] px-5 text-[1.4rem] placeholder-[var(--color-primary)] border border-[var(--color-primary)] rounded-4xl"
                            placeholder="Tìm kiếm"
                        />
                        <button className="absolute right-[10px] top-[4px] cursor-pointer">
                            <svg
                                className="w-[25px] h-[25px]"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-3 lg:gap-0 lg:flex-col items-center cursor-pointer">
                        <svg className="w-[25px] h-[25px] border border-[var(--color-primary)] rounded-full "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                        </svg>
                        <p className="text-center">Đăng nhập</p>
                    </div>
                </div>
            </div>

            {/* navbar */}
            <nav className="flex gap-[3%] items-center px-[10%] py-3  bg-[var(--color-primary)] text-white font-semibold text-[1.5rem]">
                <a href="">
                    <svg
                        className="w-[35px] h-[35px] rounded-full bg-blue-300"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M298.2 72.6C310.5 61.2 329.5 61.2 341.7 72.6L432 156.3L432 144C432 126.3 446.3 112 464 112L496 112C513.7 112 528 126.3 528 144L528 245.5L565.8 280.6C575.4 289.6 578.6 303.5 573.8 315.7C569 327.9 557.2 336 544 336L528 336L528 512C528 547.3 499.3 576 464 576L176 576C140.7 576 112 547.3 112 512L112 336L96 336C82.8 336 71 327.9 66.2 315.7C61.4 303.5 64.6 289.5 74.2 280.6L298.2 72.6zM304 384C277.5 384 256 405.5 256 432L256 528L384 528L384 432C384 405.5 362.5 384 336 384L304 384z" />
                    </svg>
                </a>
                <ul className="hidden lg:flex gap-15 items-center">
                    <li><a href="#">TIN TỨC - SỰ KIỆN</a></li>
                    <li><a href="#">VĂN BẢN PHÁP LUẬT</a></li>
                    <li><a href="#">CHƯƠNG TRÌNH - KẾ HOẠCH</a></li>
                    <li><a href="#">TƯ VẤN VIÊN PHÁP LÝ</a></li>
                    <li><a href="#">THỦ TỤC HÀNH CHÍNH</a></li>
                    <li><a href="#">NGHIÊN CỨU TRAO ĐỔI</a></li>
                </ul>
                <svg className="lg:hidden w-[30px] h-[30px] text-white ml-auto cursor-pointer"
                    onClick={() => setIsOpenNavBar(true)}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                </svg>

                {
                    isOpenNavBar
                        ?
                        <div>
                            <div className="lg:hidden fixed top-0 left-0 bottom-0 right-0 sm:w-2/3 bg-blue-50 p-20 z-10">
                                <svg
                                    className="w-[40px] h-[40px] ml-auto text-[var(--color-primary)] cursor-pointer"
                                    onClick={() => setIsOpenNavBar(false)}
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                                </svg>

                                <ul className="flex flex-col text-[2.4rem] text-[var(--color-primary)] ">
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">TIN TỨC - SỰ KIỆN</a></li>
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">VĂN BẢN PHÁP LUẬT</a></li>
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">CHƯƠNG TRÌNH - KẾ HOẠCH</a></li>
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">TƯ VẤN VIÊN PHÁP LÝ</a></li>
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">THỦ TỤC HÀNH CHÍNH</a></li>
                                    <li className="px-7 py-10 cursor-pointer hover:bg-blue-100"><a href="#">NGHIÊN CỨU TRAO ĐỔI</a></li>
                                </ul>

                            </div>
                            <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/20 z-9"
                                onClick={() => setIsOpenNavBar(false)}
                            ></div>
                        </div>
                        :
                        ''
                }
            </nav>
        </header>
    );
}