function createListItem(item){
    return `<li class="list-group-item">
        <a href="gallery-view.html?album=${item.id}" target="_self" class="">
            <i class="bi bi-image"></i>&MediumSpace; ${item.name}
        </a>
    </li>`;
}

function createMainItemCard(list){
    return `<ul class="list-group list-group-flush">
        <li class="list-group-item">
            <a href="graduation.html" target="_self" class="">
                <i class="bi bi-image"></i>&MediumSpace; Thammasat University Graduation Ceremony and Rehearsals 2022-2023
            </a>
        </li>
        ${list.map(item => createListItem(item)).join("")}
    </ul>`;
}
function contentLoad(){
    const galleryListContainer = document.getElementById("gallery-list");
    galleryListContainer.innerHTML = createMainItemCard(albums);
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