//ÖDEV-8
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren
//Arrow function algoritmasını yazalım
//switch-case   new Date().getDay()
//let deneme= ()=>{ }

var today = new Date().getDay();
let whichDayOfWeek = (today) => {
  switch (today) {
    case 1:
      document.write("Today is Monday!");
      break;
    case 2:
      document.write("Today is Tuesday!");
      break;
    case 3:
      document.write("Today is Wednesdday!");
      break;
    case 4:
      document.write("Today is Thursday!");
      break;
    case 5:
      document.write("Today is Friday!");
      break;
    case 6:
      document.write("Today is Saturday");
      break;
    case 0:
      document.write("Today is Sunday");
      break;
  }
};
whichDayOfWeek(today);
