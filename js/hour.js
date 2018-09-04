function buildDate() {
    var today = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = checkTime(h), m = checkTime(m), s = checkTime(s)

    $.gI('clock').innerHTML = `${h}:${m}:${s}`;
    $.gI('date').innerHTML = `${monthNames[today.getMonth()]} - ${dayNames[today.getDay()]}`;

}

 function checkTime(i) {
     i = i < 10 ? i = '0' + i : i;
     return i;
 }

setInterval(buildDate, 500);