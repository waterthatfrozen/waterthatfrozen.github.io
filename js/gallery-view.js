function createImage(basePath, albumName, index){
    return `<div class="col mb-3">
        <a href="#image-${index}">
            <img src="img/gallery/${basePath}/${index}.jpg" class="img-fluid rounded border border-secondary shadow" 
                alt="Image from ${albumName}" id="image-${index}">
        </a>
    </div>`;
}

function createImageBoxes(album){
    let imageBoxes = "";
    for (let i = album.first; i <= album.last; i++) {
        if(!album.excluded.includes(i)){
            imageBoxes += createImage(album.basePath, album.name, i);
        }
    }
    return imageBoxes;
}

function hashchange(){
    // highlight the current image
    let currentImage = window.location.hash;

    // remove the border from all images
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.classList.remove("border-warning");
    });

    // add border to the current image
    const currentImageElement = document.querySelector(currentImage);
    currentImageElement.classList.add("border-warning");
}

function contentLoad(){
    // Obtain album parameter from url
    const urlParams = new URLSearchParams(window.location.search);
    const albumID = urlParams.get("album");
    let currentAlbum = albums.find(item => item.id == albumID);
    if (!currentAlbum) { window.location.href = "gallery-main.html"; }
    
    // Set album name
    const albumName = document.getElementById("album-name");
    albumName.innerHTML = currentAlbum.name;

    // Set album description
    const albumDescription = document.getElementById("album-description");
    albumDescription.innerHTML = currentAlbum.description;

    // Create image box
    const imageGridContainer = document.getElementById("image-grid");
    imageGridContainer.innerHTML = createImageBoxes(currentAlbum);

    // Highlight current image border
    let currentImage = window.location.hash;
    hashchange();
}

// Go to top button
const topButton = document.getElementById("top-button");
let windowHeight = window.innerHeight;
window.onscroll = () => {
    if(document.body.scrollTop > windowHeight/4 || document.documentElement.scrollTop > windowHeight/4){
        // slowly fade in the button
        topButton.style.opacity = 1;
    }else{
        // fade out
        topButton.style.opacity = 0;
    }
};

window.onresize = () => {
    windowHeight = window.innerHeight;
};

let currentTime = new Date();
const timeSpan = document.getElementById("time");
const copyrightSpan = document.getElementById("copyright");
copyrightSpan.innerHTML = `&copy; ${currentTime.getFullYear()} Paphana Yiwsiw`;
setInterval(() => {
    currentTime = new Date();
    timeSpan.innerHTML = `${currentTime.toLocaleString("en-UK",{timeZone: "Asia/Bangkok", hour12: false})}`;
}, 1000);

window.onload = contentLoad;

// listen for hash change
window.addEventListener("hashchange", hashchange);