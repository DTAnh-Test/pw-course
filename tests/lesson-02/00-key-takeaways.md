# Tổng hợp kiến thức
Ghi chú, tổng hợp lại các kiến thức đã học
---
---
## Kiến thức về GIT
1. **Khái niệm Git & GitHub**

| GIT | GitHub |
|-----|--------|
| Là một phần mềm cài và chạy trên máy người dùng | Là 1 dịch vụ web |
| Sử dụng giao diện command line tool và các lệnh | Là 1 công cụ có giao diện người dùng |
| Là một công cụ quản lý các phiên bản trên repository local | Là nơi chứa repository online để upload file lên |
| Có các tính năng của Version Control System | Có các tính năng của Version Control System và nhiều tính năng khác |

2. **Git - commit convention: Quy tắc**

Trong một team nên có một bộ quy tắc commit giúp:

    -   Giúp cả team thống nhất về cách làm việc
    -   Code sạch, gọn và chuyên nghiệp 
    -   Commit rõ ràng, dễ hiểu và rành mạch

Examples: Quy tắc commit: <type>: <short_description>

    -   type: loại comnmit
        - chore: Chỉnh sửa nhỏ lẻ, chính tả, xoá file, ...
        - feat: thêm tính năng mới, nội dung mới
        - fix: sửa lỗi trước đó
    -   short_description: Mô tả ngắn gọn về nội dung, dùng tiếng Anh hoặc tiếng Việt không dấu (50 ký tự)

3. **Các lệnh Git cơ bản**
-   **git config --global user.name "{{tên user}}"**
    - Cấu hình mặc định tên người dùng. Trường hợp muốn cấu hình riêng cho 1 repo thì phải đứng ở đúng thư mục và bỏ **--global**
-   **git config --global user.email "{{mail}}"**
    - Cấu hình mặc định email người dùng. Trường hợp muốn cấu hình riêng cho 1 repo thì phải đứng ở đúng thư mục và bỏ **--global**
-   **git config --global init.defaultBranch main**
    - Cấu hình mặc định nhánh chính là **main**.

-   **git init**

Khi chạy lệnh này sẽ thực hiện khởi tạo repository chứa 3 vùng:

    - Working directiry: Chứa các file mới được tạo hoặc các file có sự thay đổi (Thêm, sửa, xoá)
    - Staging Area: Chứa các file chuẩn bị commit (tạo ra các phiên bản)
    - Repository: Chứa các commit (phiên bản)

-   **git add .** hoặc **git add <file 1> <file 2>**
    - git add <file 1> <file 2> : Thực hiện đẩy các file được gọi tên ở vùng Working directiry vào vùng Staging Area
    - git add . : Thực hiện đẩy tất cả các file ở vùng Working directiry vào vùng Staging Area

-   **git commit -m “message”** 

Khi chạy lệnh này sẽ thực hiện gom các file muốn commit ở vùng Staging vào 1 phiên bản với mô tả ngắn về phiên bản (message) và đẩy vào vùng Repository.

-   **git status**

Lệnh này cho phép xem trạng thái của các files:

    -   Các files màu đỏ: Các file có sự thay đổi ở vùng Working directiry
    -   Các files màu xanh: Các file chuẩn bị commit ở vùng Staging

-   **git log**

Lệnh này cho phép xem lịch sử các commit

## Kiến thức về JavaScript

1. **Comment code**
- Thường được dùng để note lại hoặc giải thích đoạn code
-   Dùng `//` để comment từng dòng code đơn. Phím tắt: Ctrl + /
    -   Ex: `//console.log("Hello World");`
-   Dùng `/* ... */` để comment nhiều dòng

2. **Biến và hằng**

| Biến | Hằng |
|----|----|
| Đại diện cho 1 vùng bộ nhớ | Đại diện cho 1 vùng bộ nhớ |
| Giá trị có thể thay đổi/ gán lại được | Giá trị không thay đổi/ gán lại được |
| Khai báo: `let myName = "David"` | Khai báo: `const pi = 3,14` |
| Dùng cho dữ liệu có tính động, thay đổi | Dùng cho dữ liệu cố định, không thay đổi |

3. **Kiểu dữ liệu - Data Type**

- Một biến/ hằng luôn có kiểu dữ liệu của nó.
- Trong JavaScript, có 8 kiểu dữ liệu và chia làm 2 nhóm chính

    3.1. **Kiểu nguyên thuỷ (primitive types)**

| Kiểu dữ liệu | Mô tả |
|--------------|-------|
| Number | Số nguyên và số thực (Không phân biệt int/float)<br>Ex:<br> Số nguyên: `let myAge = 18`<br>Số thực: `let myPoint = 8.45`<br>Ìninity (Vô hạn): `let myPoint = 9/0`<br>NaN (Không phải số): `let myPoint = "a" / 5` |
| String |Chuỗi ký tự<br>Ex: `let myName = 'David'`<br>`let myName = "David"`|
| Boolean |Giá trị logic (true/false)|
| Undefined ||
| Null ||
| Symbol ||
| BigInt ||

-   Cách kiểm tra kiểu dữ liệu của biến: Sử dụng hàm `typeof`
Ex: 
```java
let age = 20;
console.log(typeof age);
```

    3.2. **Kiểu tham chiếu (reference types)**

4. **Toán tử so sánh**

```
const a = 5;
const b = 10;
const c = 5;
const d = "5";
const e = "ab";

console.log(a === b); // So sánh tuyệt đối a bằng b => false
console.log(a !== b); // a có khác b không => true
console.log(a === c); // So sánh tuyệt đối a bằng c => true
console.log(a < b); // So sánh a nhỏ hơn b không => true
console.log(a <= b); // So sánh a nhỏ hơn hoặc bằng b không => true
console.log(a > b); // So sánh a lớn hơn b không => false
console.log(b >= a);// So sánh b lớn hơn hoặc bằng a không => true
console.log(a == d); // So sánh tương đối: Thực hiện ép về cùng kiểu dữ liệu rồi so sánh => true
console.log(a == e); // So sánh tương đối: Thực hiện ép về cùng kiểu dữ liệu rồi so sánh => false
```

5. **Toán tử logic**

-   && (AND): Trả về true nếu cả 2 vế của mệnh đề đều đúng
-   || (OR): Trả về true nếu 1 trong 2 vế của mệnh đề đúng

| A | B | `A && B` | `A \|\| B` |
|---|---|----------|------------|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

6. **Toán tử một ngôi**

- Toán từ một ngôi là toán tử chỉ cần một toán hạng để thực hiện.
    -   Prefix: Toán tử nằm phía trước
        -   ++x : Tăng x lên 1 trước và sau đó gán lại cho x (x = x + 1)
        ```
        let x = 10;
        let y = ++x;
        console.log(x); // x =11
        console.log(y); // y = 11
        ```
        -   --x : Giảm x lên 1 trước và sau đó gán lại cho x (x = x - 1)
        ```
        let x = 10;
        let y = --x;
        console.log(x); // x =09
        console.log(y); // y = 09
        ```
    -   Postfix: Toán tử nằm phía sau
        -   x++ : Trả về giá trị của x trước, sau đó mới tăng x
        ```
        let x = 10;
        let y = x++;
        console.log(x); // x = 11
        console.log(y); // y = 10
        ```
        -   x-- : Trả về giá trị của x trước, sau đó mới giảm x
        ```
        let x = 10;
        let y = x--;
        console.log(x); // x = 09
        console.log(y); // y = 10
        ```
