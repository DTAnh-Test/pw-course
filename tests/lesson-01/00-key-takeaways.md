# Tổng hợp kiến thức
Ghi chú, tổng hợp lại các kiến thức đã học
---
---
## Khởi động
1. **Cấu hình**
-   **git config --global user.name "{{tên user}}"** : Cấu hình mặc định tên người dùng.
-   **git config --global user.email "{{mail}}"** : Cấu hình mặc định email người dùng.
-   **git config --global init.defaultBranch main** : Cấu hình mặc định nhánh chính là **main**.
-   **git remote add origin git@github.com:DTAnh-Test/bba-test01.git** : Kết nối repo local với repo online.
-   **npm init playwright@latest** : Khởi tạo dự án demo playwright.
-   Extension: Playwright Test for VSCode
-   NVM (Node Version Manager): Công cụ quản lý các phiên bản NodeJs. Sử dụng `nvm user {version-NodeJs}` để switch giữa các phiên bản.
-   NodeJs: Công cụ chạy code. 

2.  **Kết nối Github**
-   SSH Keys: Là 1 cặp khoá gồm 2 file: `.id_rsa` (bí mật) và `.id_rsa.pub` (công khai).
-   SSH Keys là cơ chế cho phép Github xác định ai đang thao tác.
-   `ssh-keygen -t rsa -b 4096 -C "{email}` : Tạo SSH Keys.
-   `cat ~/.ssh/id_rsa.pub` : Lấy ra nội dung của file .id_rsa.pub để đưa lên Github.
