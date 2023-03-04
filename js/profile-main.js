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

function createPublicationCard(title, type, journal, publisher, publishedDate, doi, link){
    return `<div class="px-3 pt-2">
        <h5 class="fw-semibold">${title}</h5>
        <h6>
            <span>${type}</span><br/>
            <span>${journal}</span><br/>
            <span>Publisher: ${publisher}</span>
        </h6>
        <span class="fs-6">
            <span>Published on ${publishedDate}</span><br/>
            <span>DOI: <a href="https://doi.org/${doi}" target="_blank">${doi}</a></span><br/>
        </span>
        <span class="fs-6 mt-2">
            <a href="${link}" target="_blank" class="text-decoration-none"><i class="bi bi-link-45deg"></i>Read full paper on publisher's website</a>
        </span>
    </div>`;
}

function createListItemCard(title,list){
    return `
    <div class="px-3 pt-1">
        <h5 class="fw-semibold">${title}</h5>
        <ul class="list-dashed">
            ${list.map((item) => `<li>${item}</li>`).join("")}
        </ul>
    </div>`
}

function createGridItemCard(title,list){
    return `
    <div class="px-3 pt-1 pb-3">
        <h5 class="fw-semibold">${title}</h5>
        <div class="row row-cols-2 row-cols-md-4 g-2">
            ${list.map((item) => `<div class="col"><div class="p-2 pe-0 border rounded-2">${item}</div></div>`).join("")}
        </div>
    </div>`;
}

function contentLoad(){
    const educationContainer = document.getElementById("education-background");
    const workContainer = document.getElementById("work-experience");
    const publicationContainer = document.getElementById("publication");
    const volunteerExperienceContainer = document.getElementById("volunteer-experience");
    const awardContainer = document.getElementById("award");
    const skillContainer = document.getElementById("skill");
    education.map((item,index) => {
        educationContainer.innerHTML += createMainItemCard(item.degree, item.school, item.year, item.detail, item.link);
        if(index < education.length-1){
            educationContainer.innerHTML += `<hr/>`;
        }
    });
    work.map((item,index) => {
        workContainer.innerHTML += createMainItemCard(item.position, item.company, item.year, item.detail, item.link);
        if(index < work.length-1){
            workContainer.innerHTML += `<hr/>`;
        }
    });
    publication.map((item,index) => {
        publicationContainer.innerHTML += createPublicationCard(item.title, item.type, item.journal, item.publisher, item.publishedDate, item.doi, item.link);
        if(index < publication.length-1){
            publicationContainer.innerHTML += `<hr/>`;
        }
    });
    volunteerExperience.map((item) => {
        volunteerExperienceContainer.innerHTML += createListItemCard(item.year, item.titles);
    });
    award.map((item) => {
        awardContainer.innerHTML += createListItemCard(item.year, item.titles);
    });
    skill.map((item) => {
        skillContainer.innerHTML += createGridItemCard(item.category, item.items);
    });
}

window.onload = contentLoad;

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