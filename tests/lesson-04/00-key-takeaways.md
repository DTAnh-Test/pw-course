# Tổng hợp kiến thức Lesson 04
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## Kiến thức về Array - Object

1. **Object**
-   Khái niệm: Khai báo đối tượng, dữ liệu tổ chức theo thực thể.
-   Áp dụng: Khi cần tổ chức dữ liệu theo từng thực thể.
-   Cú pháp:
    ```
    const <object_name> = {
        [key1] : [Value1],
        [key2] : {
            [key3] : [Value3]
        }
    };
    ```
    ```
    let xe = new Object();
    xe.hang = "Toyota";
    xe.mau = "Trắng";
    xe.namSanXuat = 2023;
    ```
-   Quy tắc đặt tên key: Thường là string, không cần thiết phải đặt trong dấu nháy nếu là tên hợp lệ (không có dấu cách, ký tự đặc biệt) ex: `let person = { fullName:"" }`. Trường hợp nếu có dấu cách/ ký tự đặc biệt thì bắt buộc đặt trong dấu nháy ex: `let person = { "full Name":"" }`.
-    Truy xuất dữ liệu trong Object:
    ```
    // Cách 1: Dot notation (Dấu chấm) — phổ biến
    let person = {
        fullName: "Nguyen Van A",
        age: 28
    };
    console.log(person.fullName);
    ```
    ```
    // Cách 2: Bracket notation (Dấu ngoặc vuông): Chỉ bắt buộc dùng khi tên key chứa dấu cách/ ký tự đặc biệt/ là 1 biến
    let person = {
        "full Name": "Nguyen Van A",
        age: 28
    };
    console.log(person["full Name"]);

    const personInfo = {
        name: "An",
        age: 20
    };
    const key = "name";
    console.log(personInfo[key]); // An
    ```
-   Có thể gán lại giá trị của phần tử trong object, không gán lại được cho cả object.
    ```
    let person = {
        name: "An",
        age: 20
    };
    person.age = 24;
    console.log(person.age); // 24
    ```
-   Có thể add thêm phần tử cho object `(Ex: obj.adress="{value}")`.
    ```
    let person = {
        name: "An",
        age: 20
    };
    person.address = "Ha Noi"; // person["address"] = "Ha Noi";
    console.log(person); // { name: "An", age: 20, address: "Ha Noi"}
    ```
-   Sửa/ Xoá thuộc tính:
    ```
    let person = {
        name: "An",
        age: 20,
        address: "Ha Noi"
    };
    person.address = "Nam Dinh";
    console.log(person); // { name: "An", age: 20, address: "Nam Dinh"};

    delete person.address; // Chỉ xoá thuộc tính khỏi Object, không xoá biến.
    console.log(person); // { name: "An", age: 20};
    ```   
-   Không thể khai báo trực tiếp lồng object được `(Ex: obj.adress.city="{value}")` mà phải khai báo từng lớp `(Ex: obj.adress={}; obj.adress.city = "{Value}")`.
    ```
    let user = {
        id: 1,
        name: "Leanne Graham",
        address: {
            street: "Kulas Light",
            city: "Gwenborough",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        company: {
            name: "Romaguera-Crona"
        }
    };
        // Lấy tên thành phố
        console.log(user.address.city); // "Gwenborough"
        // Lấy toạ độ
        console.log(user.address.geo.lat); // "-37.3159"
        // Lấy tên công ty
        console.log(user.company.name); // "Romaguera-Crona"
    ```
2. **Array**
-   Array là kiểu dữ liệu dùng để lưu trữ danh sách các giá trị có thứ tự, có thể chứa nhiều kiểu dữ liệu khác nhau. Tuy nhiên thực tế nên giữ các phần tử cùng kiểu để dễ xử lý.
-   Cú pháp: 
    ```
    const <ten_mang> = [giá_tri_1, gia_tri_2,...,gia_tri_n];
    ```
    ```
    let <ten_mang> = new Array("giá_tri_1","gia_tri_2",...,"gia_tri_n");
    ```
 -  Truy xuất dữ liệu trong mảng: Dùng index (chỉ mục/ vị trí): Index trong mảng bắt đầu từ 0 là vị trí của phần tử trong mảng.
     ```
    const <ten_mang> = [giá_tri_1, gia_tri_2,...,gia_tri_n];
    console.log(<ten_mang>[index])
    ```
-   Lấy độ dài của mảng: `console.log(<ten_mang>.length);` : Trả ra số lượng phần tử trong mảng.
-   Truy xuất dữ liệu trong Array: 
    ```
    // Index bắt đầu từ 0, không phải từ 1.
    let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
    console.log(monHoc[0]); // "Toán" — phần tử đầu tiên
    console.log(monHoc[2]); // "Hoá" — phần tử thứ 3
    console.log(monHoc[4]); // "Tin" — phần tử cuối cùng
    console.log(monHoc[5]); // undefined — không tồn tại
    ```
    ```
    // Lấy phần tử cuối cùng
    let cuoi = monHoc[monHoc.length - 1]; // "Tin"
    ```
-   Gán lại giá trị theo index:
    ```
    monHoc[1] = "Vật lý";
    console.log(monHoc); // ["Toán", "Vật lý", "Hoá", "Anh", "Tin"]
    ```
-   Thêm/ xoá phần tử:
    ```
    // Thêm vào cuối: .push()
    let monHoc = ["Toán", "Lý"];
    monHoc.push("Hoá");
    console.log(monHoc); // ["Toán", "Lý", "Hoá"]

    // Xoá phần tử cuối: .pop()
    let monBiXoa = monHoc.pop();
    console.log(monBiXoa); // "Hoá"
    console.log(monHoc); // ["Toán", "Lý"]

    // Thêm vào đầu: .unshift()
    monHoc.unshift("Anh");
    console.log(monHoc); // ["Anh", "Toán", "Lý"]

    // Xoá phần tử đầu: .shift()
    monHoc.shift();
    console.log(monHoc); // ["Toán", "Lý"]
    ```    
3. **Kết hợp Array và Object**
    ```
    const arr1 = [
        {
            key1 : value1;
            key2 : value2;
        },
        {
        
            key1 : value1;
            key2 : value2;
        },
    ]
    console.log(`[${arr1[i].key1}] ${arr1[i].key2}`);
    ```
4. ** Kết hợp Array và vòng lặp
-   Dùng để xử lý hàng loạt dữ liệu.
    ```
    // Dùng for truyền thống
    let diemSo = [8, 6, 9, 7, 10];
    for (let i = 0; i < diemSo.length; i++) {
        console.log("Học sinh " + (i + 1) + ": " + diemSo[i] + " điểm");
    }
    // Học sinh 1: 8 điểm
    // Học sinh 2: 6 điểm
    // Học sinh 3: 9 điểm
    // Học sinh 4: 7 điểm
    // Học sinh 5: 10 điểm

    //Lưu ý: i < diemSo.length chứ không phải i <= diemSo.length (vì index bắt đầu từ 0).
    ```
    ```
    // Dùng for...of — gọn hơn khi không cần index
    let traiCay = ["Táo", "Cam", "Xoài"];
    for (let qua of traiCay) {
        console.log(qua);
    }
    // Táo
    // Cam
    // Xoài
    ```
    ```
    // Dùng .forEach() — cách hiện đại
    let traiCay = ["Táo", "Cam", "Xoài"];
    traiCay.forEach(function(qua, viTri) {
        console.log(viTri + ": " + qua);
    });
    // 0: Táo
    // 1: Cam
    // 2: Xoài
    ```
## Kiến thức về hàm - Function
-   **Function (Hàm)** là một khối lệnh được đặt tên, có thể **gọi lại nhiều lần** mà không cần viết lại code. Khi cần sửa chỉ cần sửa tại 1 chỗ.
-   Cú pháp:
    ```
    function tenHam() {
        // Khối lệnh
    }
    ```
Ex: ```
    function ngoiSao() {
        console.log("⭐⭐⭐⭐⭐");
    }

    function xinChao() {
        console.log("Hello World!");
    }
    ```
-   Quy tắc đặt tên hàm:
    -   Dùng camelCase: tinhTong , layDuLieu , hienThiSanPham
    -   Nên bắt đầu bằng động từ: tinh... , lay... , hienThi... , kiemTra...
    -   Tên phải diễn tả hành động mà hàm thực hiện
Ex: `function tinhDiemTrungBinh() { ... }`
-   Khai báo function chưa chạy code bên trong. Code chỉ chạy khi bạn gọi hàm. `tenham();`
-   **Parameter** và **Argument** trong hàm:
    -   Parameter: Tham số khai báo khi khai báo hàm, tên biến đặt trong () khi khai báo.
    -   Argument (Đối số): Giá trị truyền vào khi gọi hàm. Đối số này sẽ được truyền vào Parameter của hàm.
Ex: ```
    function tinhTong(a, b) {
        console.log(a + b);
    }
    tinhTong(3, 5); // 8
    tinhTong(10, 20); // 30
    ```    
-   Function có giá trị trả về: `return`:
    -   Nếu hàm có trả về kết quả thì dùng return, nếu chỉ thực thi và không trả kết quả thì không dùng.
    -   return: Dừng hàm ngay lập tức.
    ```
    function inTong(a, b) {
        console.log(a + b); // in ra, nhưng không trả về
    }
    let ketQua = inTong(3, 5); // in 8
    console.log(ketQua); // undefined — vì hàm không return
    ```
    ```
    function tinhTong(a, b) {
        return a + b; // trả kết quả về cho nơi gọi
    }
    let ketQua = tinhTong(3, 5);
    console.log(ketQua); // 8

    // Dùng trực tiếp trong biểu thức
    console.log(tinhTong(10, 20) * 2); // 60
    ```