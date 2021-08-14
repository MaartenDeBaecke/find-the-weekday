function submit(){
  const day =  document.getElementById("day").value;
  const month =  document.getElementById("month").value;
  const year =  document.getElementById("year").value;

  let Y = parseInt(year.slice(-2));
  let M = parseInt(month);
  let D = parseInt(day);

  let monthDic = {
  	"1" : 1, "2" : 4, "3" : 4, "4" : 0, "5" : 2, "6" : 5, "7" : 0,
    "8" : 3, "9" : 6, "10" : 1, "11" : 4, "12" : 6
  };

  let dayDic = {
  	"1" : "Sunday", "2" : "Monday", "3" : "Tuesday",
    "4" : "Wednesday", "5" : "Thursday", "6" : "Friday",
    "0" : "Saturday"
  };

  let montVal = monthDic[M.toString()];

  if (M === 1 || M === 2){
    leapYear(year) ? montVal -= 1 : null;
  }

  year.substring(0, 2) === ""
  let yearVal = 0

  let era = parseInt(year.substring(0, 2))

  if (era % 4 === 0){
    yearVal = 6
  } else if ((era + 1) % 4 === 0){
    yearVal = 0
  } else if ((era + 2) % 4 === 0){
    yearVal = 2
  } else if ((era + 3) % 4 === 0) {
    yearVal = 4
  } else {
    console.log("Date out of range")
  }

  let result = (Math.floor(Y / 4) + D + montVal + yearVal + Y) % 7;
  // console.log(Math.floor(Y / 4).toString() + " / " + D.toString() + " / " + montVal.toString() + " / " + yearVal.toString() + " / " + Y.toString())
  document.getElementById("answer").innerHTML = day + "/" + month + "/" + year + "  was a " + dayDic[result.toString()]

}


function leapYear(year){
  y = parseInt(year)
  if (y % 4 === 0){
    if (y % 100 == 0){
      if (y % 400 === 0){
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
}
