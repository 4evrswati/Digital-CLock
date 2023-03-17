var hourEl = document.getElementById("hours");
var minuteEl = document.getElementById("minutes");
var secondEl = document.getElementById("seconds");
var ampmEl = document.getElementById("ampm");

setInterval(function(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ampm = "AM";

    if(h > 12)
    {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
},1000);
