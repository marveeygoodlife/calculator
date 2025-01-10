
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
displayLabel.textContent = "Please enter a valid number";
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

    displayDate.innerHTML = newDate.toDateString();
}



