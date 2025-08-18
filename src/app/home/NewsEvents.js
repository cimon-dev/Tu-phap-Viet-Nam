export default function NewsEvents() {
    return (
        <div className="w-[60%] ml-auto"
            style={{ boxShadow: "3px 5px 5px rgba(0,0,0,0.1)" }}
        >
            <h2 className="text-[2.4rem] text-[var(--color-primary)] font-bold">TIN TỨC VÀ SỰ KIỆN</h2>
            <div className="mt-10">
                <div className="flex">
                    <div className="h-100 w-[45%] gap-1 grid grid-cols-2 grid grid-rows-2 bg-red-100">
                        <img className="w-full h-full object-cover" src="/anh-tin-tuc-1.jpg" alt="" />
                        <img className="w-full h-full object-cover" src="/anh-tin-tuc-2.jpg" alt="" />
                        <img className="w-full h-full object-cover" src="/anh-tin-tuc-3.jpg" alt="" />
                        <img className="w-full h-full object-cover" src="/anh-tin-tuc-4.jpg" alt="" />
                    </div>
                    <div className="w-[55%] pl-15 pr-20">
                        <h3 className="text-[2rem] font-medium">Bộ Tài chính bãi bỏ một số thông tư trong lĩnh vực tài sản công</h3>
                        <p className="mt-[4%]">Thông tư số 21/2025/TT-BTC về việc bãi bỏ các Thông tư trong lĩnh vực quản lý, sử dụng tài sản công do Bộ trưởng Bộ Tài chính ban hành.</p>
                    </div>
                </div>
            </div>

            <div className="mt-15">
                <div className="flex py-4 border-t border-[#ccc]">
                    <div className="text-center w-30 border-r border-[#ccc]">
                        10:48
                    </div>
                    <div className="px-5 font-medium line-clamp-1">Quy định mức lương chuyên gia tư vấn làm cơ sở cho việc xác định giá gói thầu</div>
                </div>

                <div className="flex py-4 border-t border-[#ccc]">
                    <div className="text-center w-30 border-r border-[#ccc]">
                        17:19
                    </div>
                    <div className="px-5 font-medium line-clamp-1">7 thủ tục hành chính được sửa đổi, bổ sung trong lĩnh vực bảo đảm an ninh hàng không</div>
                </div>

                <div className="flex py-4 border-t border-[#ccc]">
                    <div className="text-center w-30 border-r border-[#ccc]">
                        17:01
                    </div>
                    <div className="px-5 font-medium line-clamp-1">Sửa đổi hướng dẫn về nghĩa vụ hoạt động đầu tư nước ngoài trên thị trường chứng khoán</div>
                </div>
            </div>
        </div>
    )
}