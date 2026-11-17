# HKD Studio · Định giá & Đối soát

Ứng dụng trọn gói cho hộ kinh doanh bán trên **TikTok Shop** và **Shopee**, gồm 2 phần:

- **① Định giá (dùng hằng ngày)**: tính giá bán theo % lãi mong muốn sau toàn bộ phí sàn và thuế HKD 2026, so sánh TikTok với Shopee, phát hiện sản phẩm đang bán dưới giá hòa vốn.
- **② Báo cáo tháng (đầu mỗi tháng)**: biết chính xác **tháng trước lời hay lỗ bao nhiêu**, tiền thực nhận là bao nhiêu, đơn nào đã giao, đơn nào hoàn/hủy, khoản nào được sàn bồi hoàn.

👉 **Dùng ngay trên trình duyệt:** mở [`doi-soat-tiktok-shop.html`](doi-soat-tiktok-shop.html), hoặc dùng bản online qua GitHub Pages (đường link ở phần mô tả của kho).

## ① Định giá

- **Tính giá bán**: giá đề xuất theo % lãi, kiểm tra lãi ở giá đang bán, bảng tính chi tiết theo đúng tên khoản trên sổ quyết toán, so sánh 2 sàn, làm tròn giá. Chọn sản phẩm của shop để tự điền giá vốn và giá đang bán.
  - **Khuyến mãi**: nhập % giảm, ra giá gạch sao cho sau giảm vẫn đạt % lãi. Có bảng "thử mức giảm giá" và mức giảm tối đa trước khi lỗ.
  - **Combo**: gộp nhiều sản phẩm (máy + pin + sạc, quà tặng) thành một giá bán.
- **Bảng giá sản phẩm**: kiểm tra toàn bộ sản phẩm, đánh dấu sản phẩm dưới giá hòa vốn hoặc dưới mức lãi mục tiêu. Hàng mới chưa bán hiện giá đề xuất.
- **Giá vốn**: một danh mục chung cho cả định giá và báo cáo. Thêm hàng mới chưa bán, nhập/xuất bằng Excel, điền tạm theo % giá bán.
- **Biểu phí sàn**: biểu phí TikTok Shop & Shopee (theo ngành hàng), tự đối chiếu với phí thực tế trong file quyết toán.

Phần này dùng được ngay, không cần tải file nào.

## Cài như ứng dụng, dùng không cần mạng

- **Android (Chrome)**: mở link web → ⋮ → **Cài đặt ứng dụng**
- **iPhone (Safari)**: mở link web → nút Chia sẻ → **Thêm vào MH chính**
- **Máy tính (Chrome/Edge)**: bấm **⤓ Cài ứng dụng** ở góc dưới menu

Ứng dụng là một file HTML duy nhất, đã nhúng sẵn thư viện đọc Excel, nên mở được và nhập file được cả khi mất mạng.

## ② Báo cáo tháng

Báo cáo theo **ngày đặt hàng** luôn bị lệch, vì đơn đặt cuối tháng thường sang tháng sau mới được quyết toán, rồi còn hủy, hoàn, bồi hoàn xen giữa.
Ứng dụng tính theo **ngày TikTok quyết toán tiền**, nên:

- Mỗi đồng chỉ rơi vào đúng một tháng, không sót, không trùng
- Tổng tiền quyết toán **khớp từng đồng với tiền về ví TikTok**
- Tháng đã chốt sổ không bao giờ phải sửa lại

Các trang:

- **Tải dữ liệu tháng**: kéo thả file quyết toán (income) và file Tất cả đơn hàng xuất từ TikTok Seller Center
- **Tổng quan tháng**: doanh thu thuần, tiền thực nhận, lợi nhuận ròng, kênh bán, sản phẩm lãi/lỗ, mục kiểm tra "độ chính xác"
- **Lãi lỗ tháng**: chi tiết phí sàn, giá vốn, chi phí ngoài sàn, đơn treo, chốt sổ, xuất Excel
- **Đơn hàng**: tình trạng và lãi/lỗ từng đơn, diễn giải bằng lời
- **Hoàn & bồi hoàn**: đơn hủy, giao thất bại, trả hàng, tiền sàn bồi hoàn, lý do hủy

Mỗi đầu tháng (ngày 1–5):

1. Xuất **file quyết toán (income)**: Tài chính → Báo cáo quyết toán, chọn đủ cả tháng
2. Xuất **file Tất cả đơn hàng**: Đơn hàng → Xuất, từ đầu tháng trước đến cuối tháng báo cáo
3. Kéo cả hai vào **Tải dữ liệu tháng**, nhập chi phí ngoài sàn, rồi **chốt sổ**

Hướng dẫn chi tiết có ngay trong ứng dụng, ở mục **Hướng dẫn**.

## Quyền riêng tư

Ứng dụng chạy hoàn toàn trên trình duyệt của bạn. **Dữ liệu đơn hàng, giá vốn, doanh thu không được gửi đi đâu**, mà chỉ lưu trong trình duyệt trên máy bạn. Hãy dùng nút "Sao lưu" để giữ bản dự phòng.

## Tác giả & giấy phép

© 2026 **Thịnh Nguyễn**. Mã định danh: `TN-88025F2F-6D2D8BAA`

Phát hành theo giấy phép [Creative Commons Ghi công – Phi thương mại 4.0 (CC BY-NC 4.0)](LICENSE):

- ✅ Được dùng, sao chép, chia sẻ và chỉnh sửa miễn phí
- ✅ Phải ghi công tác giả **Thịnh Nguyễn** và giữ nguyên thông tin bản quyền
- ❌ Không được bán lại hoặc dùng cho mục đích thương mại khi chưa có sự đồng ý của tác giả
