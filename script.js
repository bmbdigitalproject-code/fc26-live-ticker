async function loadNews() {

    const res = await fetch("https://fc26-worker.fc26ticker.workers.dev");
    const berita = await res.json();

    const sponsor =
    "🎮 JOYSTICK BY REXUS • Official Gaming Gear Indonesia • Main Lebih Presisi • Main Lebih Nyaman •";

    const follow =
    "❤️ BANTU CHANNEL INI MENUJU 1.000.000 FOLLOWERS • TERIMA KASIH SUDAH SUPPORT ❤️ •";

    let text = "";

    berita.forEach((item,index)=>{

        text += "⚽ " + item.title + " • ";

        if((index+1)%5===0){
            text += sponsor;
        }

        if((index+1)%10===0){
            text += follow;
        }

    });

    text += sponsor + follow;

    const marquee = document.getElementById("marquee");

    marquee.innerHTML = text;

    const totalWidth = marquee.scrollWidth + window.innerWidth;

    const speed = 80;

    const duration = totalWidth / speed;

    marquee.style.animation = `ticker ${duration}s linear infinite`;

}

loadNews();

setInterval(loadNews,300000);
