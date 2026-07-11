async function loadNews() {

    const res = await fetch("https://fc26-worker.fc26ticker.workers.dev");
    const berita = await res.json();

    const sponsor =
    "🎮 JOYSTICK BY REXUS • Official Gaming Gear Indonesia • Main Lebih Presisi • Main Lebih Nyaman •";

    let text = "";

    berita.forEach((item,index)=>{

        text += "⚽ " + item.title + " • ";

        // Sponsor setiap 5 berita
        if((index+1)%5===0){
            text += sponsor;
        }

    });

    // Tambahkan sponsor lagi di akhir supaya tidak hilang
    text += sponsor + sponsor;

    const marquee = document.getElementById("marquee");

    marquee.innerHTML = text;

    const totalWidth = marquee.scrollWidth + window.innerWidth;

    const speed = 80;

    const duration = totalWidth / speed;

    marquee.style.animation = `ticker ${duration}s linear infinite`;

}

loadNews();

// Refresh setiap 5 menit
setInterval(loadNews,300000);
