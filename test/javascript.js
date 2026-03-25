// countdown
const weddingDate = new Date("April 20, 2026 08:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML =
            "<h2>Acara Sedang Berlangsung 🎉</h2>";
    }

}, 1000);

//Lokasi
document.addEventListener("DOMContentLoaded", function() {
    console.log("Halaman lokasi wedding berhasil dimuat!");
});

