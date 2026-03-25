//Form
const form = document.getElementById('rsvpForm');
const nama = document.getElementById('nama');
const jumlah = document.getElementById('jumlah');
const pesan = document.getElementById('pesan');

const errorNama = document.getElementById('errorNama');
const errorJumlah = document.getElementById('errorJumlah');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // cegah reload halaman

    let valid = true;
    errorNama.textContent = '';
    errorJumlah.textContent = '';
    successMsg.textContent = '';

    // Validasi nama (hanya huruf dan spasi)
    const namaPattern = /^[a-zA-Z\s]+$/;
    if (!nama.value.trim()) {
        errorNama.textContent = 'Nama wajib diisi.';
        valid = false;
    } else if (!namaPattern.test(nama.value.trim())) {
        errorNama.textContent = 'Nama hanya boleh huruf dan spasi.';
        valid = false;
    }

    // Validasi jumlah tamu (minimal 1)
    if (!jumlah.value) {
        errorJumlah.textContent = 'Jumlah tamu wajib diisi.';
        valid = false;
    } else if (parseInt(jumlah.value) < 1) {
        errorJumlah.textContent = 'Jumlah tamu minimal 1.';
        valid = false;
    }

    if (valid) {
        // Simulasi pengiriman data
        successMsg.textContent = `Terima kasih ${nama.value}! RSVP Anda (${jumlah.value} tamu) berhasil dikirim.`;
        form.reset();
    }
});