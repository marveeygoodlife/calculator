
let myButton = document.getElementById('button');
myButton.addEventListener('click', calculate);


function calculate() {
    let hourlyRate = Number(document.getElementById('hourlyRate').value);
    let sessionTime = Number(document.getElementById('sessionTime').value);
    let sessionDuration = Number(document.getElementById("sessionDuration").value);
    let sessionPerWeek = Number(document.getElementById('sessionPerWeek').value);
    let displayLabel = document.getElementById('displayLabel');
    let isNaNInput = isNaN(hourlyRate) || isNaN(sessionTime) || isNaN(sessionDuration) || isNaN(sessionPerWeek);

//validation to check if inputs are numbers 
if (isNaNInput ) {
displayLabel.textContent = "Please enter a  number";
return;
} 
    //calculate total  hours and fee
    let totalHours = sessionTime * sessionDuration * sessionPerWeek;
    let totalFee = totalHours * hourlyRate;  
    displayLabel.textContent = `Total Fee: ₦${totalFee}`; 
}

// display date 
const displayDate = document.getElementById('date');
if (displayDate) {
    const newDate = new Date();
    displayDate.style.textAlign = "center";
    displayDate.style.margin = "10px";
    displayDate.style.color = "white";
    displayDate.style.backgroundColor = "#183D3D";
    displayDate.style.padding = "20px";
}

// function to automatically update time in my code
function updateTime(){
    let currentDate = new Date();
    document.getElementById('date').innerHTML =`${currentDate}`;


}

setInterval(updateTime, 1000);
 