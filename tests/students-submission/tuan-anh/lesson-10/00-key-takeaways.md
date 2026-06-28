# Tổng hợp kiến thức Lesson 05
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## POM - Page Object Model

1. *Tại sao lại cần POM?**
-   Khi coding mà không theo 1 chuẩn design thì dẫn tới việc code bị lặp lại nhiều lần khiến code không được clean, gây khó khắn trong việc bảo trì.
-   POM là một design patterm ra đời để xử lý vấn đề trên, tránh việc lặp lại code giúp code clean hơn, dễ dàng bảo trì hơn.
-   POM biến trang web thành các đối tượng bao gồm các thuộc tính và hành động.
-   POM không có một chuẩn chung cụ thể. Thường sẽ dựa trên:
    -   Framework
    -   Ngôn ngữ
    -   Author
    -   Sở thích
    -   Kinh nghiệm

## TypeScript
1. **So sánh TypeScript và JavaScript**
-   JavaScript (.js) : 
    -   Quá dễ dãi => nhiều lỗi. Ex: Có thể gán lại kiểu dữ liệu của 1 biến.
-   TypeScript (.ts) : Là phần mở rộng (superset) của JavaScript.
    -   Khó tính hơn => Giảm bớt lỗi lại.
    -   Có hệ thống kiểu dữ liệu.
    -   Có thể phát hiện lỗi sớm ngay từ thời điểm coding => giảm thời gian coding.
    -   ...
-   Khi chạy code, TypeScript sẽ được biên dịch (compile) ra JavaScript để NodeJS (môi trường) có thể hiểu và chạy.
-   Lệnh `npx tsc <file_path>` để biên dịch file .ts thành .js.

2. **Define Type - Kiểu dữ liệu**
-   Trong TypeScript có thể định nghĩa kiểu dữ liệu qua type hoặc interface.
```
    type Student = {
        name: string;
        age: number
    }

    const std1: Student = {
        name: "Van A",
        age: 18
    } 
```
```
    interface Student = {
        name: string;
        age: number
    }

    const std1: Student = {
        name: "Van A",
        age: 18
    } 
```
3. **Class**
-   Class: Dùng để mô hình hoá đội tượng thành các thuộc tính và hành vi.
```
    export class Student{
        name: string;
        age: number; // Thuộc tính

        constructor(name: string, age: number) { // Khởi tạo
            this.name = name;
            this.age = age;
        }

        async getStudentInfo () { // method - Hành động
            // code
        }
    }
```
4.  **Kế thừa - extends**
-   Là cơ chế cho phép một class thừa hưởng/ kế thừa (inheritance) các thuộc tính và phương thức từ một class khác.
```
    export class <class_1> {

    }

    export class <class_2> extends <class_1> {

    }
```