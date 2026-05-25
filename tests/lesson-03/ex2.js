let myHeight = 170;
let idealWeight = NaN;
let maxlWeight = NaN;
let minlWeight = NaN;

let notiForUser = 'Chiều cao của bạn không trong phạm vi áp dụng';

if (myHeight > 100 && myHeight < 200) {
    idealWeight = ((myHeight - 100) * 9) / 10;
    maxlWeight = myHeight - 100;
    minlWeight = ((myHeight - 100) * 8) / 10;
    notiForUser = `Cân nặng lý tưởng của tôi là ${idealWeight} kg, cân nặng tối đa là ${maxlWeight} kg, cân nặng tối thiểu là ${minlWeight} kg`;
}
console.log(notiForUser);