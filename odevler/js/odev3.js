//ÖDEV-3 
//Verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var num;
num = Number(prompt("Enter number"));

if (num > 0) {
  document.write("Girilen sayı: " + num + " ve pozitiftir");
} else if (num < 0) {
  document.write("Girilen sayı: " + num + " ve negatiftir");
} else {
  document.write("Girilen sayı: " + num + " ve nötr bir sayıdır");
}
