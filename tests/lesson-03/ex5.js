// (3- 1000 % 3): = 2, 2 % 3 = 2, 1000 + 2 = 1002.
// Nếu số đầu là 1 số chia hết cho 3 thì: (3- 1002 % 3): = 3, 3 % 3 = 0, 1002 + 3 = 1005, khi chạy vòng for sẽ không in ra 1002
// => %3 ở cuối xử lý cho các trường hợp số đã chia hết cho 3
let number = 1000 + (3 - 1000 % 3) % 3;
for (number; number <= 2000; number += 3) {
    console.log(`Số ${number} là số chia hết cho 3`);
}