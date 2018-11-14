function buildDate() {
    var today = new Date();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    var h = checkTime(today.getHours()), m = checkTime(today.getMinutes()), s = checkTime(today.getSeconds());

    $.gI('clock').innerHTML = `${h}:${m}:${s}`;
    $.gI('date').innerHTML = `${month[today.getMonth()]} - ${day[today.getDay()]}`;
}

 function checkTime(i) {
     i = i < 10 ? i = '0' + i : i;
     return i;
 }

setInterval(buildDate, 500);