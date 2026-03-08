// COUNTDOWN
const targetDate = new Date("2026-09-09T00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    let distance = targetDate - now;

    if (distance < 0) {
        distance = 0;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d && h && m && s) {
        d.textContent = days;
        h.textContent = hours;
        m.textContent = minutes;
        s.textContent = seconds;
    }

}

setInterval(updateCountdown, 1000);
updateCountdown();

// FORM TAMU
const form = document.getElementById("formTamu");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let nama = document.getElementById("nama").value;
        let status = document.getElementById("status").value;

        if (nama === "" || status === "") {
            alert("Isi nama dan status kehadiran!");
            return;
        }
        let tamu = JSON.parse(localStorage.getItem("tamu")) || [];
        tamu.push({
            nama: nama,
            status: status
        });

        localStorage.setItem("tamu", JSON.stringify(tamu));
        alert("Data berhasil disimpan");
        window.location.href = "tamu.html";

    });

}

// TAMPILKAN DATA TAMU
const tabel = document.getElementById("dataTamu");

if (tabel) {

    let tamu = JSON.parse(localStorage.getItem("tamu")) || [];

    tamu.forEach((data, index) => {

        let row = tabel.insertRow();

        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = data.nama;
        row.insertCell(2).innerHTML = data.status;

    });

}

// NAVIGATION
function lihatData() {
    window.location.href = "tamu.html";
}

function kembali() {
    window.location.href = "index.html";
}