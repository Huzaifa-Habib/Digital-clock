
var date =new Date();
var hours =date.getHours();
var minutes = date.getMinutes();
var sec = date.getSeconds();
if (hours < 12){
    document.getElementById("a").innerText="AM"

}

else {
    hours >= 12;
    document.getElementById("p").innerText="PM"

}


document.getElementById("hour").innerText=hours;
document.getElementById("min").innerText=minutes;
document.getElementById("sec").innerText=sec;

