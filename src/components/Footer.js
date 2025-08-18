export default function Footer() {
    return (
        <footer className="px-[6%] pt-20 pb-10 bg-[var(--color-primary)] text-white text-[1.5rem]">
            <div className="flex items-center gap-10">
                <img className="w-[77.13px] h-[102px]" src="/logo-tu-phap.png" alt="Logo Tư Pháp VIỆT NAM" />
                <div className="">
                    <h2 className="text-[2rem] font-semibold text-shadow-md">HỖ TRỢ PHÁP LÝ CHO DOANH NGHIỆP</h2>
                    <p>Trưởng Ban biên tập: <span className="font-medium">Đồng chí Lê Vệ Quốc</span> - Cục trưởng Cục Phổ biến, giáo dục pháp luật</p>
                    <p>Giấy phép số: 28/GP-BC ngày</p>
                    <p>25/03/2005</p>
                    <p>Địa chỉ: 58-60 Trần Phú, Ba Đình, Hà Nội.</p>
                    <p>Điện thoại: 024.62739643</p>
                </div>
            </div>
            <div className="w-full h-[1px] border border-white my-8"></div>
            <p className="text-center">Ghi rõ nguồn Cổng thông tin điện tử Bộ Tư Pháp (www.moj.gov.vn) khi trích dẫn lại thông tin từ địa chỉ này.</p>
        </footer>
    );
}