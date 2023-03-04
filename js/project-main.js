function createMainItemCard(title, subtitle, duration, description, link){
    return `<div class="px-3 pt-2">
        <h5 class="fw-semibold">${title ? title : ""}</h5>
        <h6>${subtitle ? subtitle : ""}</h6>
        <span class="fs-6">
            ${duration ? duration : ""}
            ${description ? "</br>"+description : ""}
        </span>
        ${link ? `<br/><span class="fs-6 mt-2">${link}</span>` : ""}
    </div>`;
}
function contentLoad(){
    const projectListContainer = document.getElementById("project-list");
    project.map((item,index) => {
        projectListContainer.innerHTML += createMainItemCard(item.title, item.subtitle, item.year, item.description, item.link);
        if(index < project.length-1){
            projectListContainer.innerHTML += `<hr/>`;
        }
    });
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