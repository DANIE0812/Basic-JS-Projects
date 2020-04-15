
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


// ANOTHER CODE TO SHOWTIME
/*
function showTime(){

    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds();//0-59

let formatHours = convertFormat(hours)

    hours = checkTime(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    document.getElementById('clock').innerHTML = '${hours} : ${minutes} : ${seconds} ${formatHours}'

}

function convertFormat(time){
    let format = 'AM'
    if (time >= 12) {
        format = 'PM'
    }
    return format;
}

function checkTime(time){
    if (time > 12){
        time = time - 12;
    }
    if (time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if (time < 10){
        time = '0' + time;
    }
    return time
}

showTime()
setInterval (showTime, 1000)
*/

