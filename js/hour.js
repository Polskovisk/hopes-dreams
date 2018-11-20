function buildDate() {
    var date = new Date();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    var h = checkTime(date.getHours()), m = checkTime(date.getMinutes()), s = checkTime(date.getSeconds());

    $.gI('clock').innerHTML = `${h}:${m}:${s}`;
    $.gI('date').innerHTML = `${month[date.getMonth()]} - ${day[date.getDay()]}`;
}

 function checkTime(i) {
     i = i < 10 ? i = '0' + i : i;
     return i;
 }

setInterval(buildDate, 900);