import API_Key from "./config.js"

const amt = 6;

function search (search, type){
    console.log("https://pixabay.com/api/?key="+ API_Key+ "&q="+ search + "&per_page=" + amt);

    if (type=="image"){
        fetch(
            "https://pixabay.com/api/?key="
            + API_Key
            + "&q="
            + search
            + "&per_page="
            + amt
        )
        .then(dataPile => dataPile.json())
        .then(photo => {
            if(photo.hits.length == 0){
                console.log("Empty");
                return;
            }
            result_page = document.getElementById("results");
            result_page.innerHTML = "";
            for(let i=0;i<amt; i++){
                const image = document.createElement("img");
                image.src = photo.hits[i].webformatURL;
                result_page.appendChild(image);
            }
        })
    }
    else if (type=="video"){
        fetch(
            "https://pixabay.com/api/videos/?key="
            + API_Key
            + "&q="
            + search
            + "&per_page="
            + amt
        )
        .then(dataPile => dataPile.json())
        .then(photo => {
            if(photo.hits.length == 0){
                console.log("Empty");
                return;
            }
            result_page = document.getElementById("results");
            result_page.innerHTML = "";
            for(let i=0;i<amt; i++){
                const video = document.createElement("video");
                video.autoplay = true;

                video.src = photo.hits[i].videos.tiny.url;
                result_page.appendChild(video);
            }
        })
        
    }else{
        console.log("Type Error");
        console.log(type);
        return;
    }
}