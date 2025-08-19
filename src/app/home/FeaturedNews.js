export default function FeaturedNews() {
    return (
        <div className="lg:flex mt-8 ">
            <img className="w-full lg:w-[55%] object-cover" src="/anh-tin-noi-bat.png" alt="Thủ tướng chính phủ Phạm Minh Chính" />
            <div className="lg:w-[45%] lg:px-[2.5%] mt-7 lg:mt-0">
                <h2 className="w-full text-[2.4rem] text-center py-1 text-white bg-[var(--color-primary)]">
                    TIN NỔI BẬT
                </h2>
                <div className="mt-8">
                    <div className="cursor-pointer">
                        <h3 className="text-[2rem] font-medium text-[var(--color-primary)]">
                            Chỉ thị của Thủ tướng Chính phủ về thúc đẩy phát triển doanh nghiệp vừa và nhỏ
                        </h3>
                        <p className="indent-[15px]">
                            Thủ tướng Chính phủ yêu cầu thực hiện quyết liệt mục tiêu phát triển doanh nghiệp nhỏ và vừa nhanh, bền vững, tăng trưởng về số lượng, chất lượng, quy mô, hiệu quả hoạt động và đóng góp quan trọng vào nền kinh tế. Phấn đấu từ nay đến năm 2030 có thêm ít nhất 1 triệu doanh nghiệp…..
                        </p>
                        <div className="flex text-[1.4rem] font-light text-black/80 mt-1">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-[20px] h-[20px] text-[var(--color-primary)]"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                                </svg>
                                <p>1 giờ trước</p>
                            </div>
                            <a className="ml-auto mt-1" href="#">Xem thêm</a>
                        </div>
                    </div>

                    {/* gạch ngang */}
                    <div className="w-full h-[1px] border border-[#ccc] mt-2 mb-4"></div>

                    <div className="cursor-pointer">
                        <h3 className="text-[2rem] font-medium text-[var(--color-primary)]">
                            Chỉ thị của Thủ tướng Chính phủ về thúc đẩy phát triển doanh nghiệp vừa và nhỏ
                        </h3>
                        <p className="indent-[15px]">
                            Thủ tướng Chính phủ yêu cầu thực hiện quyết liệt mục tiêu phát triển doanh nghiệp nhỏ và vừa nhanh, bền vững, tăng trưởng về số lượng, chất lượng, quy mô, hiệu quả hoạt động và đóng góp quan trọng vào nền kinh tế. Phấn đấu từ nay đến năm 2030 có thêm ít nhất 1 triệu doanh nghiệp…..
                        </p>
                        <div className="flex text-[1.4rem] font-light text-black/80 mt-1">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-[20px] h-[20px] text-[var(--color-primary)]"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                                </svg>
                                <p>1 giờ trước</p>
                            </div>
                            <a className="ml-auto my-1" href="#">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}