var firstName = prompt("Ismingizni kiriting: ")
console.log("Ismingizni kiriting: " + firstName);

var age = prompt("Yoshingizni kiriting: ")
console.log("Yoshingizni kiriting: " + age)
if(age>=0 && 18>=age) {alert("Yoshsiz. O'qishingiz kerak")}
if(age>18 && 50>=age) {alert("Ishlashingiz kerak")}
if(age>50 && 59>=age) {alert("Yaqinda pensiyaga chiqasiz")}
if(age>59 && 150>=age) {alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)")}
else {alert("Nimadir noto'g'ri ketib qoldi")}


var a = prompt("Misolni yeching: 3+7 = ?")
console.log("Misol 1: " + "3+7 = ?\n" + "To'g'ri javob: " + (3 + 7))
if (a == (3 + 7)) { console.log("Sizning javob to'g'ri: " + a);
} else { console.log("Sizning javob noto'g'ri: " + a);
}


var b = prompt("Misolni yeching: 35+5 = ?")
console.log("Misol 2: " + "35+5 = ?\n" + "To'g'ri javob: " + (35 + 5) + " Sizning javob: " + b)
if (b == (35 + 5)) { console.log("Sizning javob to'g'ri: " + b);
} else { console.log("Sizning javob noto'g'ri: " + b);
}


var c = prompt("Misolni yeching: 110-10 = ?")
console.log("Misol 3: " + "110-10 = ?\n" + "To'g'ri javob: " + (110 - 10) + " Sizning javob: " + c)
if (c == (110 - 10)) { console.log("Sizning javob to'g'ri: " + c);
} else { console.log("Sizning javob noto'g'ri: " + c);
}


var d = prompt("Misolni yeching: 4*5 = ?")
console.log("Misol 4: " + "4*5 = ?\n" + "To'g'ri javob: " + (4 * 5) + " Sizning javob: " + d)
if (d == (4 * 5)) { console.log("Sizning javob to'g'ri: " + d);
} else { console.log("Sizning javob noto'g'ri: " + d);
}


var e = prompt("Misolni yeching: 100/100 = ?")
console.log("Misol 5: " + "100/100 = ?\n" + "To'g'ri javob: " + (100 / 100) + " Sizning javob: " + e)
if (e == (100 / 100)) { console.log("Sizning javob to'g'ri: " + e);
} else { console.log("Sizning javob noto'g'ri: " + e);
}


var x = prompt("1 sonni kiriting")
var y = prompt("2 sonni kiriting")
var z = prompt("3 sonni kiriting")
if (x>y>z || z>y>x) {alert("O'rta qiymat: " + y)} 
if (y>x>z || z>x>y) {alert("O'rta qiymat: " + x)}
if (y>z>x || x>z>y) {alert("O'rta qiymat: " + z)}
else {alert("SYSTEM ERRORRRRRRRRRR")}




