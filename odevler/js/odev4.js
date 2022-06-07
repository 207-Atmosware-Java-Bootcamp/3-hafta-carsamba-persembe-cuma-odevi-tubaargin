//ÖDEV-4
//Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

var password, repassword;
var array = [];
var i = 0;
var wrongPasswordCount = 0;
password = prompt("Enter your password");
repassword = prompt("Enter your password again");

if (password === repassword) {
  document.write("Login success");
} else {
  while (!(password === repassword)) {
    wrongPasswordCount++;
    array[i] = repassword;
    i++;
    repassword = prompt("Passwords do not match! Enter your password again");
  }
  document.write("Login success");
}

document.write("<br/>Password: " + password);
document.write("<br/>Repassword: " + repassword);
document.write("<br/>WrongPasswordCount: " + wrongPasswordCount);

document.write("<br/> Wrong Passwords: ");
for (temp of array) {
  document.write(temp + " ");
}
