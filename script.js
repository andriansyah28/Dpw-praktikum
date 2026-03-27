function kirimUcapan() {
    alert("Fitur kirim ucapan belum tersedia 😄");
}

function openInvitation() {

    // contoh efek scroll ke bawah
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

//TIMER
document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("April 20, 2026 08:00:00").getTime();

    const daysEl = document.querySelector(".days");
    const hoursEl = document.querySelector(".hours");
    const minutesEl = document.querySelector(".minutes");
    const secondsEl = document.querySelector(".seconds");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

});