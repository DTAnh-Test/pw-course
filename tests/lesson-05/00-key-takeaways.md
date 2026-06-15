# Tổng hợp kiến thức Lesson 05
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## DOM Terminology

1. **DOM - Document Object Model**
-   Khái niệm: DOM là mô hình biểu diễn đối tượng dưới dạng cấu trúc cây (object tree).
[Ví dụ về DOM](https://i.postimg.cc/5tmXX3Px/DOM.png)
-   Cấu trúc 1 Element: ![Cấu trúc Element](../images/Element.png)

## Selector

-   Selector là công cụ giúp tìm kiếm các phần tử (element) trên trang web.
-   Có 3 loại selector thường dùng:
    -   Xpath:
        -   Dùng được trong hầu hết các trường hợp (99.99%).
        -   Đa dạng, có khả năng tìm được các phần tử khó tìm với các selector khác.
        -   Cú pháp hơi dài.
        -   Ex: `//h3[text()='Giới thiệu Viettel']/preceding::div[@class='helpsupport-card__img']/img`
    -   CSS Selector:
        -   Ngắn gọn, performance cao
        -   Dùng cho các trường hợp dễ tìm.
        -   Không linh hoạt bằng XPath: Ví dụ các trường hợp xử lý text/ đi ngược node thì Css selector không xử lý được.
        -   Ex: `div.helpsupport-card__img img`
    -   Playwright selector:
        -   Chỉ dùng riêng cho Playwright
        -   Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        -   Hướng tới “giống người dùng đang nhìn thấy gì”
        -   Ex: `page.getByText(“Add to cart”);`
1.   **Xpath Selector**
-   Có 2 loại:
    -   Xpath tuyệt đối: Đi dọc theo cây DOM. Ex: `/html/body/div[1]/div/div[2]/div/div[14]`.
        -   Bắt đầu từ gốc, dùng /.
        -   Phải viết đầy đủ đường dẫn từ gốc đến phần tử cần lấy.
        -   Dễ bị lỗi khi HTML có thay đổi.
        -   Không linh hoạt.
    -   Xpath tương đối (**Nên dùng**): Tìm phần tử dựa theo đặc tính. Bắt đầu bằng //. Ex: `//h3[text()='Giới thiệu Viettel']`.
        -   Bắt đầu từ bất kỳ vị trí nào trong DOM, dùng //.
        -   Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi.
2.  **Playwright selector**
-   Cú pháp:
    ```
    import { test, expect } from '@playwright/test';

    test('<Tên testcase>', async ({ page }) => {
        await test.step('<Tên step>', async () => {
         // Code
    });
    });
    ```
-   Lưu ý: Steps nên được map 1-1 với testcase để dễ dàng maintain.
-   Các actions/ option:

| Actions | Mô tả |
|---------|-------|
| click | Hàm click dùng để thực hiện click vào các phần tử trên trang web |
| fill | Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web |
| type | Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng |
| pressSequentially | Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng (thường dùng hơn type)|
| hover | Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover |
| check | Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked |
| uncheck | Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked |
| selectOption | Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown |
| press | Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác |
| dblclick | Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web |
| dragAndDrop | Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web |