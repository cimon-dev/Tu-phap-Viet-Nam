export default function Header() {
    return (
        <header>
            <div className="flex text-[var(--color-primary)] px-[6%] py-10 items-center">
                <div className="flex gap-20 items-center">
                    <img className="w-[90px] h-[119px]" src="/logo-tu-phap.png" alt="Logo Tư Pháp VIỆT NAM" />
                    <h1 className="text-[3.6rem] text-outline font-bold">HỖ TRỢ PHÁP LÝ CHO DOANH NGHIỆP</h1>
                </div>
                <div className="flex gap-15 ml-auto items-center">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-[296px] px-5 text-[1.4rem] placeholder-[var(--color-primary)] h-[33px] border border-[var(--color-primary)] rounded-4xl"
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
                    <div className="flex flex-col items-center cursor-pointer">
                        <svg className="w-[25px] h-[25px] border border-[var(--color-primary)] rounded-full "
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                        </svg>
                        <p>Đăng nhập</p>
                    </div>
                </div>
            </div>

            {/* navbar */}
            <nav className="px-[10%] py-3  bg-[var(--color-primary)] text-white font-semibold text-[1.5rem]">
                <ul className="flex gap-[4%] items-center">
                    <li><a href="">
                        <svg
                            className="w-[35px] h-[35px] rounded-full bg-blue-300"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M298.2 72.6C310.5 61.2 329.5 61.2 341.7 72.6L432 156.3L432 144C432 126.3 446.3 112 464 112L496 112C513.7 112 528 126.3 528 144L528 245.5L565.8 280.6C575.4 289.6 578.6 303.5 573.8 315.7C569 327.9 557.2 336 544 336L528 336L528 512C528 547.3 499.3 576 464 576L176 576C140.7 576 112 547.3 112 512L112 336L96 336C82.8 336 71 327.9 66.2 315.7C61.4 303.5 64.6 289.5 74.2 280.6L298.2 72.6zM304 384C277.5 384 256 405.5 256 432L256 528L384 528L384 432C384 405.5 362.5 384 336 384L304 384z" />
                        </svg>
                    </a></li>
                    <li><a href="#">TIN TỨC - SỰ KIỆN</a></li>
                    <li><a href="#">VĂN BẢN PHÁP LUẬT</a></li>
                    <li><a href="#">CHƯƠNG TRÌNH - KẾ HOẠCH</a></li>
                    <li><a href="#">TƯ VẤN VIÊN PHÁP LÝ</a></li>
                    <li><a href="#">THỦ TỤC HÀNH CHÍNH</a></li>
                    <li><a href="#">NGHIÊN CỨU TRAO ĐỔI</a></li>
                </ul>
            </nav>
        </header>
    );
}