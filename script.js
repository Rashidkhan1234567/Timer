let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let getMsec = document.getElementById("msec");
let getSec = document.getElementById("sec");
let getMin = document.getElementById("min");
let getHour = document.getElementById("hour");
let interval;

function startbtn() {
    document.getElementById("lightBulb1").style.backgroundColor = "green";
    document.getElementById("lightBulb1").style.boxShadow = "7px 7px 13px rgb(0, 179, 0), -7px -7px 13px rgb(0, 179, 0), 7px -7px 13px rgb(0, 179, 0), -7px 7px 13px rgb(0, 179, 0)"
    document.getElementById("lightBulb2").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb2").style.boxShadow = "none"
    document.getElementById("lightBulb3").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb3").style.boxShadow = "none"
    
  interval = setInterval(() => {
    msec++;
    if (msec < 10) {
      getMsec.innerHTML = "0" + msec;
    } else {
      getMsec.innerHTML = msec;
    }
    if (msec > 100) {
      sec++;
      if (sec < 10) {
        getSec.innerHTML = "0" + sec;
      } else {
        getSec.innerHTML = sec;
      }
      msec = 0;
    } else if (sec > 60) {
      min++;
      if (min < 10) {
        getMin.innerHTML = "0" + min;
      } else {
        getMin.innerHTML = min;
      }
      sec = 0;
    } else if (min > 60) {
      hour++;
      getHour.innerHTML = hour;
      min = 0;
    }
  }, 10);
  document.getElementById('lightButton1').disabled = true;
  document.getElementById('lightButton2').disabled = false;
  document.getElementById('lightButton3').disabled = true;

}

function stopbtn(){
    document.getElementById("lightBulb2").style.backgroundColor = "red";
    document.getElementById("lightBulb2").style.boxShadow = "7px 7px 13px rgb(255, 8, 8), -7px -7px 13px rgb(255, 8, 8), 7px -7px 13px rgb(255, 8, 8), -7px 7px 13px rgb(255, 8, 8)"
    document.getElementById("lightBulb1").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb1").style.boxShadow = "none"
    document.getElementById("lightBulb3").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb3").style.boxShadow = "none"

    clearInterval(interval);
  document.getElementById('lightButton1').disabled = false;
  document.getElementById('lightButton3').disabled = false;

}

function resetbtn(){
    document.getElementById("lightBulb3").style.backgroundColor = "blue";
    document.getElementById("lightBulb3").style.boxShadow = " 7px 7px 13px rgb(15, 15, 248), -7px -7px 13px rgb(15, 15, 248), 7px -7px 13px rgb(15, 15, 248), -7px 7px 13px rgb(15, 15, 248)"
    document.getElementById("lightBulb1").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb1").style.boxShadow = "none"
    document.getElementById("lightBulb2").style.backgroundColor = "#c2c2c2";
    document.getElementById("lightBulb2").style.boxShadow = "none"

    min = 0;
    sec = 0;
    msec = 0;
    hour = 0;
    getMsec.innerHTML = "00";
    getSec.innerHTML = "00";
    getMin.innerHTML = "00";
    getHour.innerHTML = "00";

  document.getElementById('lightButton2').disabled = true;

}