//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun
//eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin.
//ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var num, rand;
var count = 1;
num = Number(prompt("Enter number 1 to 10:"));
rand = Math.round(Math.random() * 9 + 1);

function findNumber(num) {
  while (rand != num) {
    if (num < rand) {
      count++;
      num = Number(prompt(+num + "den büyük bir sayı giriniz:"));
    } else{
      count++;
      num = Number(prompt(num + "den küçük bir sayı giriniz:"));
    }
  }
  document.write(+num + "=" + rand + " " + count + ". tahmininizde bildiniz");
}

findNumber(num);
