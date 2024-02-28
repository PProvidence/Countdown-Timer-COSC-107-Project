const targetdate = new Date();
targetdate.setDate(targetdate.getDate() +10); // Increment the date by 10 days

function updatecounter(){
    const now = new Date();
    const diff = targetdate - now;
    if(diff<=0){
        clearInterval(timerInterval);
        document.getElementById("countdown-timer").innerHTML = "Giveaway is over!!!";
    }
    else{
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}
const timerInterval = setInterval(updatecounter, 1000);

const endDate = targetdate.toLocaleString("en-US", {weekday: "long", day: "numeric", month: "long", year: "numeric"});  

document.getElementById("deadline").innerHTML = endDate;