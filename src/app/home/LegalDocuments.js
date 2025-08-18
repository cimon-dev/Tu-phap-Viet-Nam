export default function LegalDocuments() {
    return (
        <div>
            <h2 className="text-[2.4rem] font-bold text-[var(--color-primary)]">VĂN BẢN PHÁP LUẬT</h2>
            {/* lọc & tìm kiếm */}
            <div className="flex gap-10">
                {/* Loại văn bản */}
                <div>
                    <h4 className="font-medium">Loại văn bản</h4>
                    <div className="border w-70 px-4 relative mt-1 text-[1.4rem]">
                        Tất cả
                        <img className="absolute right-5 top-1/2" src="/mui-ten-xuong.png" alt="" />
                    </div>
                </div>

                {/* Phân loại */}
                <div>
                    <h4 className="font-medium">Phân loại</h4>
                    <div className="border w-70 px-4 relative mt-1 text-[1.4rem]">
                        Tất cả
                        <img className="absolute right-5 top-1/2" src="/mui-ten-xuong.png" alt="" />
                    </div>
                </div>

                {/* Cơ quan ban hành */}
                <div>
                    <h4 className="font-medium">Cơ quan ban hành</h4>
                    <div className="border w-70 px-4 relative mt-1 text-[1.4rem]">
                        Tất cả
                        <img className="absolute right-5 top-1/2" src="/mui-ten-xuong.png" alt="" />
                    </div>
                </div>

                {/* Năm phát hành */}
                <div>
                    <h4 className="font-medium">Năm phát hành</h4>
                    <div className="flex gap-8">
                        <div className="border w-50 px-4 relative mt-1 text-[1.4rem]">
                            Tất cả
                            <img className="absolute right-5 top-1/2" src="/mui-ten-xuong.png" alt="" />
                        </div>
                        <div className="border w-50 px-4 relative mt-1 text-[1.4rem]">
                            Tất cả
                            <img className="absolute right-5 top-1/2" src="/mui-ten-xuong.png" alt="" />
                        </div>
                    </div>
                </div>
                <button className="flex items-end cursor-pointer">
                    <div className="text-[1.4rem] bg-[var(--color-primary)] px-4 py-1 text-white h-1/2">Tìm kiếm</div>
                </button>
            </div>

            {/* Bảng và thông báo */}
            <div className="mt-10 flex gap-15">
                <table className="w-[70%] bg-red-100 text-center">
                    <thead>
                        <tr>
                            <th className="w-1/4 border border-black/30 h-[40px] text-white bg-[var(--color-primary)]">
                                Số/Ký hiệu
                            </th>
                            <th className="w-1/4 border border-black/40 h-[40px] text-white bg-[var(--color-primary)]">
                                Ngày phát hành
                            </th>
                            <th className="w-1/2 border border-black/40 h-[40px] text-white bg-[var(--color-primary)]">
                                Trích yếu
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-blue-300/50 odd:bg-white">
                            <td className="border border-black/40 font-medium">85/2024/ TT-BTC</td>
                            <td className="border border-black/40 font-medium">29/11/2024</td>
                            <td className="text-start px-[2%] py-5 line-clamp-2 border border-black/40">Thông tư 85/2024/TT-BTC sửa đổi thông tư 69/2022/TT-BTC hướng dẫn chứng chỉ bảo hiểm, chứng chỉ đại lý bảo hiểm</td>
                        </tr>

                        <tr className="even:bg-blue-300/50 odd:bg-white">
                            <td className="border border-black/40 font-medium">85/2024/ TT-BTC</td>
                            <td className="border border-black/40 font-medium">29/11/2024</td>
                            <td className="text-start px-[2%] py-5 line-clamp-2 border border-black/40">Thông tư 85/2024/TT-BTC sửa đổi thông tư 69/2022/TT-BTC hướng dẫn chứng chỉ bảo hiểm, chứng chỉ đại lý bảo hiểm</td>
                        </tr>

                        <tr className="even:bg-blue-300/50 odd:bg-white">
                            <td className="border border-black/40 font-medium">85/2024/ TT-BTC</td>
                            <td className="border border-black/40 font-medium">29/11/2024</td>
                            <td className="text-start px-[2%] py-5 line-clamp-2 border border-black/40">Thông tư 85/2024/TT-BTC sửa đổi thông tư 69/2022/TT-BTC hướng dẫn chứng chỉ bảo hiểm, chứng chỉ đại lý bảo hiểm</td>
                        </tr>

                        <tr className="even:bg-blue-300/50 odd:bg-white">
                            <td className="border border-black/40 font-medium">85/2024/ TT-BTC</td>
                            <td className="border border-black/40 font-medium">29/11/2024</td>
                            <td className="text-start px-[2%] py-5 line-clamp-2 border border-black/40">Thông tư 85/2024/TT-BTC sửa đổi thông tư 69/2022/TT-BTC hướng dẫn chứng chỉ bảo hiểm, chứng chỉ đại lý bảo hiểm</td>
                        </tr>
                    </tbody>
                </table>

                <div className="w-[30%] border border-black/60">
                    <div className="h-[40px] bg-[var(--color-primary)] px-[3%] text-white text-[2rem] font-bold flex items-center">
                        <svg
                            className="w-[25px] h-[25px]"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
                        </svg>
                        THÔNG BÁO
                    </div>
                    {/* các thông báo */}
                    <div className="h-[300px] overflow-y-auto flex flex-col gap-5 py-5 px-5">
                        <div className="flex items-start gap-5">
                            <svg className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] text-[var(--color-primary)] translate-y-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                            </svg>
                            <p>Công văn đôn đốc thực hiện, giải quyết những vấn đề pháp lý của doanh nghiệp tại Diễn đàn Kinh doanh và pháp luật năm 2024</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <svg className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] text-[var(--color-primary)] translate-y-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                            </svg>
                            <p>Công văn đôn đốc thực hiện, giải quyết những vấn đề pháp lý của doanh nghiệp tại Diễn đàn Kinh doanh và pháp luật năm 2024</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <svg className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] text-[var(--color-primary)] translate-y-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                            </svg>
                            <p>Công văn đôn đốc thực hiện, giải quyết những vấn đề pháp lý của doanh nghiệp tại Diễn đàn Kinh doanh và pháp luật năm 2024</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <svg className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] text-[var(--color-primary)] translate-y-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                            </svg>
                            <p>Công văn đôn đốc thực hiện, giải quyết những vấn đề pháp lý của doanh nghiệp tại Diễn đàn Kinh doanh và pháp luật năm 2024</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <svg className="min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] text-[var(--color-primary)] translate-y-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                            </svg>
                            <p>Công văn đôn đốc thực hiện, giải quyết những vấn đề pháp lý của doanh nghiệp tại Diễn đàn Kinh doanh và pháp luật năm 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 