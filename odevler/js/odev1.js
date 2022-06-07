//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

var x, k;
x = Number(prompt("y=3x+4k denklemi için: x değeri giriniz:"));
k = Number(prompt("y=3x+4k denklemi için: k değeri giriniz:"));

function formula(x, k) {
  return 3 * x + 4 * k;
}
document.write("x:" + x + " k:" + k + "<br>");
document.write("y=3x+4k <br>");
document.write("y=" + formula(x, k));
