const daysBox = document.getElementById('days');
const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

const endTime = new Date('December 31 2022 23:59:59');

function findDaysLeft(){
    let now = new Date();
    let diff = endTime - now;
    let days = Math.floor(diff /1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let mins = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
    let day = Math.floor(diff / days);
    
    daysBox.innerHTML = `Days:${days}`
    hoursBox.innerHTML = ` Hours:${hours}`
    minutesBox.innerHTML = `Minutes:${mins}`
    secondsBox.innerHTML = `Seconds:${seconds}`

    setTimeout(findDaysLeft,1000)

}



findDaysLeft()