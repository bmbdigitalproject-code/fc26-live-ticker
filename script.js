const sponsor = "🎮 JOYSTICK BY REXUS • Official Gaming Gear Indonesia • Main Lebih Presisi, Main Lebih Nyaman";

const berita = [
"⚽ Timnas Indonesia terus mempersiapkan diri menghadapi agenda internasional.",
"🏸 Indonesia menargetkan gelar juara di turnamen bulu tangkis dunia.",
"🏍 Persaingan MotoGP semakin ketat memasuki seri berikutnya.",
"🏀 NBA memasuki persiapan musim baru.",
"⚽ Bursa transfer pemain Eropa masih menjadi sorotan.",
"🏆 Liga 1 Indonesia menghadirkan persaingan yang semakin sengit."
];

let hasil = "";

berita.forEach((item, index) => {
    hasil += item + " • ";

    if ((index + 1) % 3 === 0) {
        hasil += sponsor + " • ";
    }
});

document.getElementById("marquee").innerHTML = hasil.repeat(5);
