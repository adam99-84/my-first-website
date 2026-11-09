
// Update the digital clock
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

// Button interaction
function sayHello() {
    alert("Welcome to Adam's first website! 🚀");
}

updateClock();
setInterval(updateClock, 1000);
