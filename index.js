document.getElementById('startdate').valueAsDate = new Date();

document.getElementById("7w").addEventListener("click", function () {
    document.getElementById("days").value = 49;
});

document.getElementById("14w").addEventListener("click", function () {
    document.getElementById("days").value = 98;
});

document.getElementById("90d").addEventListener("click", function () {
    document.getElementById("days").value = 90;
});