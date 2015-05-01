function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var meridiem = "PM";
    if (hours < 12) {
    hours = hours - 12;
    meridiem = "AM";
}

if (hours === 0) {
    hours = 12;
}
    var minutes = currentTime.getMinutes();
      if (minutes <10) {
          minutes="0" + minutes;
      }
    var seconds = currentTime.getSeconds();
      if (seconds < 10) {
          seconds= "0" + seconds;
      }
    var theTime = document.getElementById('theTime');
      
    theTime.innerText = hours + ":" + minutes + ":" + seconds + meridiem;
  }
  displayTime();
setInterval(displayTime, 1000);


var bckin = document.getElementById("bckin");
function myFunction() {
   document.getElementById("theClock").style.backgroundImage = "url(" + bckin.value + ")";
}