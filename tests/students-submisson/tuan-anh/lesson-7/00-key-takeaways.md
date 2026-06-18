# Tổng hợp kiến thức Lesson 03
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## Kiến thức về Selector

1.  **Mối quan hệ các node trong DOM - Xpath axes method**
-   ancestor - node tổ tiên : Là các node chứa node đang đứng (... - ông - cha).
-   parent - node cha : Là node trực tiếp chứa node đang đứng (node con => node cha).
-   preceding : Là tất cả các node phía trên của node hiện tại trừ các node trực hệ ancestor (cha - ông -...) => Hạn chế dùng.
-   following : Là tất cả các node phía dưới node hiện tại trừ các node trực hệ descendant (con-cháu-chắt...) => Hạn chế dùng.
-   child - node con : Là các node con trực tiếp của node đang đứng => Không cần thiết sử dụng.
-   descendant - node con cháu : Là tất cả các node chứa trong node đang đứng => Không cần thiết sử dụng.
-   preceding-sibling - node anh : Là các node phía trên cùng cấp với node đang đứng và trong cùng 1 node cha (node em => node anh).
-   following-sibling - node em : Là các node phía dưới cùng cấp với node đang đứng và trong cùng 1 node cha (node anh => node em).
-   **Lưu ý** : Luôn đứng từ node cố định để tìm node không cố định.

2.  **Xpath axes method** : 
-   Là phương thức điều hướng và chọn các node trong DOM dựa trên mối quan hệ giữa các node.
-   Ex:
    -   `//input[@id='search']/acestor::div` : Tất cả các thẻ div chứa node `input[@id='search']`.
    -   `//input[@id='search']/parent::div` : Thẻ div cha chứa node `input[@id='search']`.
    -   `//input[@id='search']/preceding-sibling::span` : Tất cả các thẻ span cùng cha và trên node `input[@id='search']`.
    -   `//input[@id='search']/preceding-sibling::span` : Tất cả các thẻ span cùng cha và dưới node `input[@id='search']`.
-   Wildcard: * => Khớp tất cả
-   Ex: `//*[@id='search']` : Tất cả các thẻ có id = 'search'.

3. **Kết hợp điều kiện để tìm thẻ**
-   AND : Thẻ cần tìm phải đáp ứng tất cả diều kiện. Ex: `//input[@id='search' and @class='user-search']`
-   OR : Thẻ cần tìm chỉ cần đáp ứng 1/n vế diều kiện. Ex: `//input[@id='search' or @class='user-search']`

4. **Các hàm thường dùng trong cấu trúc Xpath**
-   text() : Lấy text trực tiếp của element. Ex: `//input[text()='Tìm kiếm']` : Lấy text so sánh tuyệt đối.
-   normalize-space() : Bỏ tất cả các dấu cách thừa ở đầu-cuối text. Ex: `//input[normalize-space()='Tìm kiếm']`: Xử lý thẻ input có text = 'Tìm kiếm' đã được lược bỏ các dấu cách thừa ở đầu và cuối. 
-   contains() : Kiểm tra text có chứa chuối con cần tìm không. Ex: `//input[contains(text(),'Tìm kiếm')]` : Tìm các thẻ input có text chứa chuỗi 'Tìm kiếm'.