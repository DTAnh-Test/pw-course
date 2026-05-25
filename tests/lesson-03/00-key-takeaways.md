# Tổng hợp kiến thức Lesson 03
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## Kiến thức về JavaScript

1. **Mệnh đề điều kiện**
-   Dùng để kiểm tra logic.
-   Cú pháp: 
    ```
    if (<điều kiện 1>) {
        // kết quả 1
    } else if (<điều kiện 2>) {
        // kết quả 2
    } else {
        // kết quả 2
    }
    ```
-   Không nên đưa tất cả điều kiện vào câu điều kiện, cần kết hợp đề bài và tư duy logic sao cho cần ít nhất các nhánh if - else mà vẫn bao phủ đủ các trường hợp => Clean code

2. **Vòng lặp**

-   Dùng để lặp lại 1 đoạn logic tuỳ vào điều kiện dừng là gì.
-   Các loại vòng lặp:
    -   for (i)
    -   for (of)
    -   for (each)
    -   for (in)
    -   while
    -   do - whille
- Cú pháp:
    ```
    for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
        // code
    }
    ``` 
- Nguyên lý xử lý: 
    -   Khởi tạo điều kiện: 1 lần duy nhất khi bắt đầu vào vòng lặp
    -   Check với điều kiện lặp: Nếu sai thì dừng, nếu đúng chạy xuống khối code
    -   Sau khi khối code chạy xong, chạy lên cập nhật đẻ thay đổi giá trị biến đếm => check với điều kiện lặp => ...   

3. **Convention Coding**

-   Giúp code dự án theo một chuẩn format chung, dể nhìn, dể đọc hiểu code.
- Một số convention phổ biến về đặt tên:
    -   snake_case: Tất cả các chữ viết thường, cách nhau bởi dấu gạch dưới
    -   kebab-case: Tất cả các chữ viết thường, cách nhau bởi dấu gạch ngang
    -   camelCase: Chữ đầu viết thường, các chữ sau viết hoa ký tự đầu
    -   PascalCase: Tất cả các ký tự đầu các từ viết hoa
    -   SCREAMING_SNAKE_CASE: Tất cả các chữ viết hoa, cách nhau bởi dấu gạch dưới.

- Quy ước chung của khoá học:
    -   kebab-case: Đặt tên file, folder
    -   camelCase: Đặt tên biến, hàm
    -   PascalCase: Đặt tên class

4. **Console.log**
-  Thường dùng khi cần debug.
-   Một số cách dùng:
    -   `console.log('text')`: Sử dụng với nháy đơn
    -   `console.log("text")`: Sử dụng với nháy kép
    -   ```let age = "25";  console.log(`Năm nay tôi ${age} tuổi`)```: Sử dụng kết hợp với biến
    -   `console.log("Năm nay tôi " + age + " tuổi")`: Sử dụng nối chuỗi

