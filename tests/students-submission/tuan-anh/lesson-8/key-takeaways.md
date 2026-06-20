# Tổng hợp kiến thức Lesson 08
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## Playwright tests

1. **Test group/ suite**
-   test describe: Tập hợp nhóm testcase theo nhóm chức năng (test suite).
-   Tổ chức testcase khoa học, hiệu quả và dễ quản lý và maintain.
Ex: ```
    test.describe('Login suite', async () => {
        test('Test case 1', async ({ page }) => {

        });

        test('Test case 2', async ({ page }) => {

        });
    });
    ```
2.  **Hook**
-   Hook có thể hiểu là bước xử lý chung tại các thời điểm trước - trong - sau khi chạy test, test suite.
-   Các hooks:
    -   beforeAll
    -   beforeEach
    -   afterEach
    -   afterAll
Ex: ```
    test.beforeAll(async()=>{ //Ảnh hưởng tất cả các test
        //code
    });

    test.afterAll(async()=>{ //Ảnh hưởng tất cả các test
        //code
    });

    test.describe('Login suite', async () => {
        test.beforeEach(async()=>{  //Ảnh hưởng chỉ trong test.describe Login suite
            //code
        });
        
        test.afterEach(async()=>{   //Ảnh hưởng chỉ trong test.describe Login suite
            //code
        })

        test('Test case 1', async ({ page }) => {
            //code
        });

        test('Test case 2', async ({ page }) => {
            //code
        });
    });
    ```

3. **Assertion**
-   Nhằm xác định/ kiểm tra một điều gì có đúng kết quả mong đợi hay không.
-   Cần assertion để xác định được kết quả chạy testcase.
-   Các loại assertion:
    -   Generic Assertions (thư viên expect): expec(giá trị) = (giá trị)
    Ex: `expect(value).toBe(expected)` - `expect(array).toHaveLength(3)` - `expect(string).toContains('text')`
    -   Web-first Assertion (auto-waiting): expect(phần tử) có giá trị => Tự động chờ đến khi điều kiện thoả mãn. Nó giải quyết các vấn đề về waiting của Web. 
    Ex: `await expect(page.getByRole('heading', { name: 'Tài liệu học automation test' })).toBeVisible();`
