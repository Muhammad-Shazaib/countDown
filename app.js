
let targetDate = new Date('August 14, 2025 00:00:00').getTime();

setInterval(Independent,1000);
function Independent(){
let current = new Date().getTime();
difference = targetDate - current;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;


let d = Math.floor(difference / (day));
let h = Math.floor((difference % (day)) / (hour));
let m = Math.floor((difference % (hour)) / (minute));
let s = Math.floor((difference % (minute)) / (second));

document.getElementById('day').innerText = d;
document.getElementById('hour').innerText = h;
document.getElementById('minute').innerText = m;
document.getElementById('second').innerText = s;

}
