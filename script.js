async function loadNews() {

    const res = await fetch("https://fc26-worker.fc26ticker.workers.dev");
    const berita = await res.json();

    const sponsor =
    "🎮 JOYSTICK BY REXUS • Official Gaming Gear Indonesia • Main Lebih Presisi • Main Lebih Nyaman •";

    const follow =
    "❤️ FOLLOW • Road To 1.000.000 Followers • Terima Kasih Sudah Support ❤️ •";

    let text = "";

    berita.forEach((item,index)=>{

        text += "⚽ " + item.title + " • ";

        // Setiap 5 berita tampil sponsor
        if((index+1)%5===0){
            text += sponsor;
        }

        // Setiap 10 berita tampil ajakan follow
        if((index+1)%10===0){
            text += follow;
        }

    });

    // Tambahkan penutup supaya tidak pernah kosong
    text += sponsor + follow;

    const marquee = document.getElementById("marquee");

    marquee.innerHTML = text;

    const totalWidth = marquee.scrollWidth + window.innerWidth;

    const speed = 80;

    const duration = totalWidth / speed;

    marquee.style.animation = `ticker ${duration}s linear infinite`;

}

loadNews();

// Refresh berita setiap 5 menit
setInterval(loadNews,300000);
