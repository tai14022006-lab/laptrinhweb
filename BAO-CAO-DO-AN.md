# BÁO CÁO WEBSITE BÁN HÀNG NỘI THẤT

**Tên dự án:** Nội Thất Mộc  
**Người thực hiện:** ................................................  
**Lớp:** ................................................  
**Ngày thực hiện:** ................................................

## 1. Tổng quan dự án

Website Nội Thất Mộc là một dự án web tĩnh nhằm giới thiệu và bán các sản phẩm nội thất cho không gian sống như phòng khách, phòng ngủ và phòng bếp. Mục tiêu chính của hệ thống là tạo một giao diện trực quan, hiện đại, thân thiện với người dùng và có khả năng hỗ trợ khách hàng tìm kiếm, lọc sản phẩm, xem thông tin chi tiết và thực hiện các thao tác mua hàng giả lập. Giao diện được thiết kế bằng tiếng Việt, tập trung vào trải nghiệm thân thiện với người dùng và phù hợp với xu hướng thương mại điện tử hiện nay.

Dự án này không chỉ thể hiện khả năng làm giao diện mà còn cho thấy cách tổ chức dữ liệu, xây dựng bố cục, thiết lập tương tác phía client và tối ưu trải nghiệm trên nhiều kích thước màn hình. Điều này rất phù hợp với mục tiêu học tập và thực hành xây dựng website bán hàng trực tuyến theo mô hình front-end hiện đại.

## 2. Mục tiêu xây dựng

### 2.1 Mục tiêu kinh doanh
- Tạo nền tảng thương mại điện tử cơ bản cho cửa hàng nội thất.
- Giới thiệu các sản phẩm nổi bật với hình ảnh, thông tin và ưu đãi hấp dẫn.
- Tạo cảm giác tin cậy và chuyên nghiệp cho khách hàng khi truy cập website.

### 2.2 Mục tiêu người dùng
- Khách hàng có thể xem danh mục sản phẩm theo nhóm.
- Tìm kiếm nhanh sản phẩm theo tên hoặc danh mục.
- Xem thông tin chi tiết như giá, chất liệu, kích thước, thời gian giao hàng và bảo hành.
- Thêm sản phẩm vào giỏ hàng và theo dõi tổng tiền.
- Hoàn tất quy trình đặt hàng demo trong môi trường thử nghiệm.

### 2.3 Mục tiêu kỹ thuật
- Sử dụng HTML, CSS, SCSS và JavaScript thuần để xây dựng website tĩnh.
- Tối ưu bố cục tương thích mobile, tablet và desktop.
- Dữ liệu và trạng thái giỏ hàng được lưu trong trình duyệt bằng `localStorage`.
- Triển khai tính năng tương tác trên phía client mà không cần backend.

## 3. Công nghệ sử dụng

- HTML5: xây dựng cấu trúc trang web, giao diện và các thành phần nội dung.
- CSS3: định dạng bố cục, hiệu ứng, spacing, màu sắc, typography và responsive layout.
- SCSS: tạo source stylesheet có tính tổ chức tốt hơn, dễ bảo trì, có thể sử dụng biến và lồng selector.
- JavaScript: xử lý logic sản phẩm, lọc, tìm kiếm, giỏ hàng, modal và form demo.
- Google Fonts: sử dụng font hiện đại để tăng thẩm mỹ giao diện.
- Unsplash: hình ảnh nền và sản phẩm lấy từ nguồn ảnh chất lượng cao.
- LocalStorage: lưu trữ giỏ hàng để duy trì trạng thái trên trình duyệt.

## 4. Cấu trúc dự án

```text
d:\web bán hàng trực tuyến
├── index.html                    # Trang chủ
├── products.html                 # Trang danh sách sản phẩm
├── product.html                  # Trang chi tiết sản phẩm
├── about.html                   # Trang giới thiệu về cửa hàng
├── contact.html                 # Trang liên hệ
├── BAO-CAO-DO-AN.md            # Báo cáo dự án
├── assets/
│   ├── css/
│   │   └── styles.css          # File CSS chính của website
│   ├── js/
│   │   └── script.js           # Dữ liệu sản phẩm và xử lý logic
│   └── scss/
│       └── styles.scss         # Mã nguồn SCSS
└── README (nếu có)             # Tài liệu bổ sung (nếu được thêm sau)
```

### 4.1 Vai trò của từng trang
- `index.html`: trang giới thiệu thương hiệu, khuyến mãi, danh mục nổi bật và sản phẩm bán chạy.
- `products.html`: danh sách sản phẩm, bộ lọc theo danh mục và chức năng tìm kiếm.
- `product.html`: hiển thị chi tiết từng sản phẩm với số lượng, giá và thông tin kỹ thuật.
- `about.html`: giới thiệu giá trị, tầm nhìn và quy trình thiết kế nội thất của cửa hàng.
- `contact.html`: form liên hệ và thông tin cửa hàng để khách hàng gửi yêu cầu tư vấn.

## 5. Phân tích giao diện và trải nghiệm người dùng

Giao diện website được thiết kế theo phong cách tươi sáng, hiện đại và ấm cúng, phù hợp với ngành nội thất. Hệ thống sử dụng:

- Màu sắc chủ đạo: trắng, nâu, be, xám và các tông màu tự nhiên để thể hiện sự ấm áp và sang trọng.
- Typography: font chữ lớn, rõ ràng, tạo cảm giác thanh thoát và dễ đọc.
- Không gian: các section có khoảng cách hợp lý, giúp người dùng dễ di chuyển qua lại giữa các phần.
- Nút bấm và CTA: được đặt rõ ràng để dẫn dắt người dùng từ khám phá đến đặt hàng.
- Tương tác: có các hiệu ứng hover, menu mobile, modal xem nhanh, người dùng được phản hồi ngay khi thao tác.

Các yếu tố này giúp khách hàng cảm thấy website không chỉ đẹp mắt mà còn dễ sử dụng và thuận tiện trong quá trình mua sắm.

## 6. Chức năng chính của website

### 6.1 Trang chủ
Trang chủ có các phần chính như:
- banner hero với lời chào và thông điệp thương hiệu;
- phần lợi ích của cửa hàng;
- danh mục sản phẩm theo không gian sống;
- các sản phẩm bán chạy;
- form đăng ký nhận tin;
- footer với thông tin cuối trang.

### 6.2 Trang danh sách sản phẩm
Trang `products.html` hiển thị toàn bộ danh mục sản phẩm bằng cách render dữ liệu từ JavaScript. Chức năng nổi bật:
- hiển thị 8 sản phẩm mẫu;
- lọc theo danh mục: Phòng khách, Phòng ngủ, Phòng bếp;
- tìm kiếm sản phẩm theo tên;
- xem nhanh sản phẩm bằng modal;
- chuyển đến trang chi tiết sản phẩm.

### 6.3 Trang chi tiết sản phẩm
Trang `product.html` nhận tham số `id` từ URL để tìm sản phẩm tương ứng, ví dụ:

```text
product.html?id=sofa-linen
```

Tại đây người dùng có thể:
- xem hình ảnh lớn và thông tin sản phẩm;
- xem mô tả, chất liệu, kích thước, bảo hành, giao hàng;
- điều chỉnh số lượng;
- thêm vào giỏ hàng;
- quay lại danh sách sản phẩm nếu sản phẩm không tồn tại.

### 6.4 Giỏ hàng
Giỏ hàng được xử lý hoàn toàn ở client-side với JavaScript. Tính năng chính:
- Thêm sản phẩm từ nhiều vị trí trên website.
- Tăng hoặc giảm số lượng.
- Xóa sản phẩm khỏi giỏ.
- Tính tổng tiền tạm tính.
- Lưu lại trạng thái vào `localStorage`.

### 6.5 Form liên hệ và đăng ký nhận tin
- Form đăng ký nhận tin hiển thị thông báo sau khi submit.
- Form liên hệ trên `contact.html` minh họa giao diện demo, không gửi dữ liệu lên server.
- Form đặt hàng ở giỏ hàng cũng là demo giao diện và không thực hiện thanh toán thật.

### 6.6 Responsive web design
Website có khả năng hoạt động trên nhiều kích thước màn hình nhờ vào:
- grid layout linh hoạt;
- menu mobile bằng nút mở/đóng;
- breakpoint CSS cho tablet và điện thoại;
- tỷ lệ hình ảnh và bố cục được điều chỉnh phù hợp màn hình.

## 7. Phân tích kỹ thuật dự án

### 7.1 Dữ liệu sản phẩm
Các sản phẩm được định nghĩa trong mảng `products` trong file `assets/js/script.js`. Mỗi đối tượng chứa các trường như:
- `id`
- `name`
- `category`
- `price`
- `rating`
- `badge`
- `image`
- `alt`
- `description`
- `material`
- `dimensions`

Điều này giúp dữ liệu được tổ chức rõ ràng và dễ mở rộng khi cần tích hợp backend sau này.

### 7.2 Logic render sản phẩm
Hàm `renderProducts()` duyệt qua danh sách sản phẩm đã lọc và tạo HTML động cho từng thẻ sản phẩm. Từ đó, trang `products.html` và `index.html` có thể hiển thị danh sách tương tự nhau mà không cần viết HTML cố định cho từng sản phẩm.

### 7.3 Logic lọc và tìm kiếm
Hàm `getVisibleProducts()` dùng `normalizeText()` để chuẩn hóa văn bản, loại bỏ dấu tiếng Việt và so khớp không phân biệt hoa thường. Đây là cách tối ưu để tìm kiếm nhanh và ổn định.

### 7.4 LocalStorage
Hàm `readCart()`, `saveCart()` cho phép:
- đọc dữ liệu giỏ hàng từ trình duyệt;
- lưu trạng thái sau mỗi thay đổi;
- đảm bảo dữ liệu của giỏ hàng không bị mất khi refresh trang.

### 7.5 Modal xem nhanh
Hàm `ensureProductPreviewModal()` tạo modal mới nếu chưa có. Modal giúp khách hàng xem tóm tắt sản phẩm mà không cần rời khỏi trang hiện tại, tạo trải nghiệm mượt mà hơn.

### 7.6 Xử lý đặt hàng demo
Khi người dùng click nút đặt hàng:
1. kiểm tra giỏ hàng có sản phẩm hay không;
2. mở dialog đặt hàng;
3. người dùng nhập họ tên, số điện thoại và địa chỉ;
4. submit form mô phỏng giao dịch.

Dịch vụ này hiện chỉ là giao diện demo, không có API hoặc server xử lý dữ liệu.

## 8. Đánh giá ưu điểm của dự án

- Giao diện đẹp, hiện đại và phù hợp với thương hiệu nội thất.
- Có đầy đủ các chức năng cơ bản của một web bán hàng.
- Tương tác tốt và dễ sử dụng với người dùng.
- Tích hợp responsive design tốt cho nhiều thiết bị.
- Mã nguồn rõ ràng, dễ học và dễ mở rộng.
- Sử dụng các công nghệ frontend cơ bản phù hợp với mục đích học tập.

## 9. Hạn chế của dự án

Mặc dù website đã có nhiều tính năng quan trọng, vẫn còn tồn tại các hạn chế sau:

- Dữ liệu sản phẩm được lưu cứng trong file JavaScript, chưa kết nối database.
- Chưa có backend để xử lý đơn hàng thật, thanh toán, xác thực người dùng hay quản lý kho.
- Các biểu mẫu chỉ demo giao diện, chưa gửi dữ liệu tới máy chủ.
- Chưa có phân quyền quản trị, chưa có quản lý sản phẩm và người dùng.
- Hệ thống chưa hỗ trợ SEO chuyên nghiệp hoàn chỉnh do website hoàn toàn tĩnh.
- Ảnh và font được tải từ dịch vụ bên ngoài, nên nếu mất kết nối internet thì trải nghiệm hình ảnh sẽ bị giảm.

## 10. Kiểm tra và đánh giá

### 10.1 Kiểm tra chức năng
- Kiểm tra JavaScript với lệnh: `node --check assets/js/script.js`
- Mở trang chủ để kiểm tra bố cục và giao diện.
- Chọn các danh mục trên trang chủ và kiểm tra chúng lọc đúng sản phẩm.
- Thử tìm kiếm theo tên sản phẩm như "sofa" hoặc "bàn".
- Thêm sản phẩm vào giỏ hàng và xác nhận tổng tiền tăng lên.
- Giảm hoặc xóa sản phẩm khỏi giỏ hàng để kiểm tra cập nhật.
- Mở trang chi tiết sản phẩm với URL hợp lệ và không hợp lệ.
- Kiểm tra giao diện trên màn hình điện thoại và tablet.

### 10.2 Kết quả đánh giá
Website đã đáp ứng được các chức năng cơ bản của hệ thống e-commerce demo:
- hiển thị danh mục;
- xem chi tiết mặt hàng;
- tìm kiếm và lọc sản phẩm;
- quản lý giỏ hàng;
- đặt hàng giả lập.

Từ góc độ học tập và minh họa sản phẩm, đây là một website đạt chuẩn tốt về mặt giao diện và trải nghiệm cơ bản.

## 11. Hướng phát triển trong tương lai

Để nâng cấp website từ mức demo sang sản phẩm thương mại thực tế, cần thực hiện các bước sau:

1. Kết nối database để lưu sản phẩm, khách hàng và đơn hàng.
2. Xây dựng backend bằng Node.js, PHP, Python hoặc ASP.NET.
3. Tạo API để quản lý sản phẩm, giỏ hàng và đặt hàng.
4. Tích hợp thanh toán trực tuyến như VNPay, MoMo hoặc Stripe.
5. Thêm chức năng đăng nhập, đăng ký, quản lý tài khoản.
6. Xây dựng dashboard quản trị cho admin.
7. Tối ưu SEO, tốc độ tải trang, bảo mật và trải nghiệm mobile.
8. Tích hợp quản lý kho, chiết khấu, ưu đãi và voucher.
9. Đưa hệ thống lên môi trường hosting thực tế để triển khai cho người dùng.

## 12. Kết luận

Website Nội Thất Mộc là một dự án front-end bán hàng nội thất được xây dựng khá hoàn chỉnh ở mức demo. Website đã thể hiện được cách tổ chức giao diện, cách trình bày thông tin sản phẩm và cách xây dựng trải nghiệm mua sắm cho người sử dụng. Nhờ vào sự kết hợp giữa HTML, CSS, SCSS và JavaScript, dự án không chỉ đẹp mắt mà còn có tính ứng dụng cao trong môi trường học tập và minh họa sản phẩm.

Mặc dù đang ở dạng website tĩnh và chưa có backend, dự án này vẫn là nền tảng tốt để phát triển thành hệ thống thương mại điện tử thực tế trong tương lai. Với các cải tiến về dữ liệu, quản lý đơn hàng, thanh toán và tính bảo mật, website có khả năng được mở rộng thành một cửa hàng nội thất trực tuyến chuyên nghiệp, đáp ứng tốt cho nhu cầu thương mại hiện đại.

---

### Lời cam kết
Dự án này được thực hiện nhằm mục đích học tập, nghiên cứu và phát triển kỹ năng xây dựng website bán hàng trực tuyến. Mọi nội dung trong báo cáo phản ánh đúng chức năng, cấu trúc và thực trạng của dự án hiện tại.
