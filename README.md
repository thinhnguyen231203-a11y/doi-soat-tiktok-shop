# Đối soát TikTok Shop

Ứng dụng giúp người bán trên **TikTok Shop** biết chính xác **mỗi tháng lời hay lỗ bao nhiêu**, tiền thực nhận là bao nhiêu, đơn nào đã giao, đơn nào hoàn/hủy, và khoản nào được sàn bồi hoàn.

👉 **Dùng ngay trên trình duyệt:** mở [`doi-soat-tiktok-shop.html`](doi-soat-tiktok-shop.html), hoặc dùng bản online qua GitHub Pages (đường link ở phần mô tả của kho).

## Vì sao cần ứng dụng này?

Báo cáo theo **ngày đặt hàng** luôn bị lệch, vì đơn đặt cuối tháng này thường sang tháng sau mới được quyết toán, rồi còn hủy, hoàn, bồi hoàn xen giữa.
Ứng dụng tính theo **ngày TikTok quyết toán tiền**, nên:

- Mỗi đồng chỉ rơi vào đúng một tháng, không sót, không trùng
- Tổng tiền quyết toán **khớp từng đồng với tiền về ví TikTok**
- Tháng đã chốt sổ không bao giờ phải sửa lại

## Tính năng

- **Tổng quan**: doanh thu thuần, tiền thực nhận, lợi nhuận ròng, biên lợi nhuận, kèm mục kiểm tra "độ chính xác" của báo cáo
- **Lãi lỗ tháng**: chi tiết phí sàn, giá vốn, chi phí ngoài sàn, đơn treo, chốt sổ, xuất Excel
- **Đơn hàng**: tình trạng và lãi/lỗ từng đơn, diễn giải bằng lời
- **Hoàn & bồi hoàn**: đơn hủy, giao thất bại, trả hàng, tiền sàn bồi hoàn, lý do hủy
- **Giá vốn**: nhập/xuất bằng Excel, điền tạm theo % giá bán
- **Theo kênh bán & sản phẩm**: Video / LIVE / thẻ sản phẩm, sản phẩm lãi nhất, sản phẩm bị lỗ

## Cách dùng

1. Mở file `doi-soat-tiktok-shop.html` bằng Chrome hoặc Edge
2. Vào **Tải dữ liệu** và kéo thả 2 file xuất từ TikTok Seller Center:
   - **File quyết toán (income)**: Tài chính → Báo cáo quyết toán, chọn đủ cả tháng
   - **File Tất cả đơn hàng**: Đơn hàng → Xuất, lấy từ đầu tháng trước đến cuối tháng báo cáo
3. Nhập **giá vốn** cho sản phẩm
4. Xem **Tổng quan**, rồi **chốt sổ** khi báo cáo đã đủ dữ liệu

Hướng dẫn chi tiết có ngay trong ứng dụng, ở mục **Hướng dẫn**.

## Quyền riêng tư

Ứng dụng chạy hoàn toàn trên trình duyệt của bạn. **Dữ liệu đơn hàng, giá vốn, doanh thu không được gửi đi đâu**, mà chỉ lưu trong trình duyệt trên máy bạn. Hãy dùng nút "Sao lưu" để giữ bản dự phòng.

## Tác giả & giấy phép

© 2026 **Thịnh Nguyễn**. Mã định danh: `TN-88025F2F-6D2D8BAA`

Phát hành theo giấy phép [Creative Commons Ghi công – Phi thương mại 4.0 (CC BY-NC 4.0)](LICENSE):

- ✅ Được dùng, sao chép, chia sẻ và chỉnh sửa miễn phí
- ✅ Phải ghi công tác giả **Thịnh Nguyễn** và giữ nguyên thông tin bản quyền
- ❌ Không được bán lại hoặc dùng cho mục đích thương mại khi chưa có sự đồng ý của tác giả
