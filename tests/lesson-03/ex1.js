const numberConst = 5;
let notiLog = "Bạn nhập giá trị bằng 0";

if (numberConst > 0) {
    notiLog = "Giá trị bạn nhập là số dương";
} else if (numberConst < 0) {
    notiLog = "Giá trị bạn nhập là số âm";
}
console.log(notiLog);