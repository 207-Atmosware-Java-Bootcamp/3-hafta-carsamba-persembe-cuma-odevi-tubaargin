//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren
//Immediate function algoritmasını yazalım
//switch-case   new Date().getDay()
//()()

var today = new Date().getDay();
(function (whichDayOfWeek) {
  switch (whichDayOfWeek) {
    case 1:
      document.write("Today is Monday!");
      break;
    case 2:
      document.write("Today is Tuesday!");
      break;
    case 3:
      document.write("Today is Wednesday!");
      break;
    case 4:
      document.write("Today is Thursday!");
      break;
    case 5:
      document.write("Today is Friday!");
      break;
    case 6:
      document.write("Today is Saturday!");
      break;
    case 0:
      document.write("Today is Sunday!");
      break;
  }
})(today);
