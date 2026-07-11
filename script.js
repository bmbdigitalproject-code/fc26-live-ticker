async function loadNews() {

    try {

        const res = await fetch("https://fc26-worker.fc26ticker.workers.dev");

        console.log("STATUS:", res.status);

        const berita = await res.json();

        console.log("DATA:", berita);

        const marquee = document.getElementById("marquee");

        marquee.innerHTML = berita.map(x => "⚽ " + x.title).join(" • ");

    } catch(err){

        console.error(err);

        document.getElementById("marquee").innerHTML =
        "ERROR : " + err.message;

    }

}

loadNews();
