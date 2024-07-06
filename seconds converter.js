let bgCon = document.getElementById("bg-con");
let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", function() {
    let hoursValue = hoursInput.value;
    let minutesValue = minutesInput.value;
    if ((hoursValue !== "") && (minutesValue !== "")) {
        let secondsInHours = parseInt(hoursValue) * 3600;
        let secondsInMinutes = parseInt(minutesValue) * 60;
        let seconds = secondsInHours + secondsInMinutes;
        timeInSeconds.textContent = seconds;
        timeInSeconds.classList.add("seconds-Class", "text-center");
        errorMsg.textContent = "";
    } else if (hoursValue === "") {
        errorMsg.textContent = "please Enter a valid number of hours";
        errorMsg.classList.add("error-para");

    } else if (minutesValue === "") {
        errorMsg.textContent = "please Enter a valid number of minutes";
        errorMsg.classList.add("error-para");

    }


});