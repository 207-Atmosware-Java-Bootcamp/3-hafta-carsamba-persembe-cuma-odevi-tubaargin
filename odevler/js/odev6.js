//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak
//eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
//dbUserEmail="deneme@gmail.com"
//dbUserPassword="root"

var userEmail, userPassword;
var dbUserEmail = "deneme@gmail.com";
var dbUserPassword = "root";
var wrongCount = 4;
var isFail = false;

userEmail = prompt("Enter your userEmail");
userPassword = prompt("Enter your userPassword");

function adminFunction(userEmail, userPassword) {
  while (!(dbUserPassword === userPassword && dbUserEmail === userEmail)) {
    wrongCount--;
    if (wrongCount == 0) {
      isFail = true;
      break;
    }
    userEmail = prompt("userEmail do not match! Enter your userEmail again");
    userPassword = prompt("Passwords do not match! Enter your password again");
  }
  if (isFail) {
    document.write("Blocked");
  } else {
    document.write("Login Success");
  }
}

adminFunction(userEmail, userPassword);
