//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var x;
x = Number(prompt("Bir derece giriniz:"));
function formula(x) {
  return (x * 9) / 5 + 32;
}
document.write("Girilen derece: " + x);
document.write("<br> Formül: (x*9/5)+32");
document.write("<br> Fahrenhayt: " + formula(x));
