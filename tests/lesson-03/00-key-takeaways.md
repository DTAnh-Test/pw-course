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
    `switch ... case`    
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

## Kiến thức về Git

1.  **Các lệnh Git liên quan xử lý commit**
-   **git restore --staged <ten_file1> <ten_file2>...**
-   **git restore --staged ."**
Lệnh này cho phép kéo các file được gọi tên đang được đóng gói và chuẩn bị commit ở vùng Staging về lại vùng Working Directiry.

-   **git reset HEAD~(Số lượng commit)**
Lệnh này cho phép xoá số lượng commit (tính từ commit mới nhất) và kéo các file thay đổi về lại vùng Working directiry.
Lưu ý: Commit đầu tiên không thể bị xoá (trừ khi xoá folder .git)

-   **git reset --soft HEAD~(Số lượng commit)**
Lệnh này cho phép xoá số lượng commit (tính từ commit mới nhất) và kéo các file thay đổi về lại vùng Staging.
Lưu ý: Commit đầu tiên không thể bị xoá/ thay đổi (trừ khi xoá folder .git)

-   **git commit --amend**
Lệnh này cho phép chỉnh sửa nội dung của commit trước đó (message, add file)

-   **git commit --amend -m ”(message)”**
Lệnh này cho phép thay đổi commit message cuối cùng (mới nhất)

2.  **Nhánh (Branch) trong Git**
-   Nhánh cho phép tạo ra các bản sao y hệt của nhánh chính, cho phép thực hiện các thay đổi mà không ảnh hưởng tới nhánh chính/ các nhánh khác.
- Lưu ý: Nên luôn luôn đứng tại nhánh main và tạo nhánh

3.  **Các lệnh xử lý Nhánh (Branch) trong Git**
-   **git config --global init.defaultBranch main** : Cấu hình mặc định nhánh chính là **main**.
-   **git branch <tên_nhanh>** : Tạo ra nhánh mới
-   **git branch**: Kiểm tra các nhánh hiện có và cho thấy hiện tại đang đứng ở nhánh nào
-   **git checkout <ten_nhanh>** : Chuyển sang nhánh khác
-   **git swicth <tên nhánh>// : Chuyển sang nhánh khác
-   **git checkout -b <tên nhánh>**: Khởi tạo nhánh và chuyển sang đứng tại nhánh đó
-   **git branch -D <tên nhánh>**: Xoá nhánh. Lưu ý không đứng tại nhánh muốn xoá, phải chuyển sang nhánh khác trước khi thực hiện xoá nhánh
-   **git push origin main** : Đưa nhánh và đẩy code lên repo online
    -   origin : Đại diện cho 1 repo remote
    -   main : Tên nhánh muốn đẩy code lên
-   **git push origin -D <tên nhánh>** : Xoá nhánh trên repo online

3.  **Git ignore**
-   Cấu hình các nội dung không muốn đẩy lên repo online (thư viện, report, ...).
-   Cú pháp:
    -   `# <Comment>` : Bắt đầu bằng # sẽ hiểu đây là 1 comment/ ghi chú
    -   `<tên file>` : Ignore một file cụ thể
    -   `*.log` :   Ignore tất cả file có đuôi `.log`
    -   `<Folder_name>/` : Ignore thư mục
    -   `**/*.txt` : Ignore tất cả các file .txt trong mọi thư mục
    -   `!<file name>` : Không ignore file này
    -   `/<file name>` : Chỉ ignore file ở thư mục gốc
    -   `<folder>/**/*.txt` : Ignore tất cả các file .txt trong thư mục (folder)
