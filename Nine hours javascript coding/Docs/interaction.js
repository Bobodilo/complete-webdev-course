const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");




const adventure = "28 Feb 2022";

function countdown() {

    const adventureDate = new Date(adventure);
    const currentDate = new Date();

    const distance = (adventureDate - currentDate);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log (days, hours, minutes, seconds);
    
    
   daysEl.innerHTML = days;
   hoursEL.innerHTML = hours;
   minutesEl.innerHTML = minutes;
   secondsEl.innerHTML = seconds;
    

  

} 



countdown();

setInterval(countdown, 1000);

