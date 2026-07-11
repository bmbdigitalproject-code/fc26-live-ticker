const RSS =
"https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=olahraga&hl=id&gl=ID&ceid=ID:id";

const sponsor =
"🎮 JOYSTICK BY REXUS • Official Gaming Gear Indonesia • Main Lebih Presisi, Main Lebih Nyaman";

async function loadNews(){

    const res = await fetch(RSS);

    const data = await res.json();

    let hasil="";

    data.items.forEach((item,i)=>{

        hasil += " 📰 " + item.title + " • ";

        if((i+1)%8===0){
            hasil += sponsor + " • ";
        }

    });

    document.getElementById("marquee").innerHTML=hasil;

}

loadNews();

setInterval(loadNews,600000);
