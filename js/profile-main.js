const education = [
    {
        degree:`Bachelor of Engineering (B.Eng. in Digital Engineering)`,
        school: `<a href="https://www.siit.tu.ac.th/">Sirindhorn International Institute of Technology (SIIT), Thammasat University.</a>`,
        year: `2019 - Present (Expected Graduation: 2023)`,
        gpa: `3.94/4.00`,
        detail: `- Specialized in Application software development. <br/>
        - 4-year continuous full scholarship recipient <br/>
        - Achived first rank in academic year 2020.`,
        link: null
    },{
        degree:`High School`,
        school: `Princess Chulaborn Science High School, Trang`,
        year: `2016 - 2019`,
        gpa: `3.71/4.00`,
        detail: `Science and Mathematics Program`,
        link: null
    }
];

const work = [
    {
        position: `Research Assistant`,
        company: `Web Application Development, Smart Lighting in Campus, Thammasat AI-Ready City`,
        year: `June 2022 - Present`,
        detail: null,
        link: null
    },{
        position: `Undergraduate Research Assistant`,
        company: `Biomedical Image Processing Unit, SIIT, Thammasat University`,
        year: `June 2021 - July 2021`,
        detail: `Worked on <span class="fst-italic">Hemorrhage Segmentation using a thresholding method with Multi-Region Contrast Enhancement in Mobile Fundus Images</span>`,
        link: null
    }
];

const project = [
    {
        title: "Smart Lighting in Campus: The Web Application and Data Analytics",
        subtitle: "Thammasat AI-Ready City Project",
        year: "June 2022 - Present",
        description: `Web application development for monitoring and controlling the smart lighting system in campus, and data analytics for more efficient energy usage and sufficient lighting in the campus.`,
        link: `<a href="https://www.github.com/waterthatfrozen/Smart-City" target="_blank" class="text-decoration-none"><i class="bi bi-github"></i> GitHub: waterthatfrozen/Smart-City</a>`
    },{
        title: "Wordled",
        subtitle: "Clone of Popular Web-based Wordle Game",
        year: "March 2022 - April 2022",
        description: `DES422 Web and Business Application Development Course Project`,
        link: `<a href="https://www.github.com/waterthatfrozen/DES422-Group-Project" target="_blank" class="text-decoration-none"><i class="bi bi-github"></i> GitHub: waterthatfrozen/DES422-Group-Project</a>`
    },{
        title: "EATERIO",
        subtitle: "Canteen Food Ordering and Management System",
        year: "September 2021 - December 2021",
        description: `CSS325/326 Database Systems and Laboratory Course Project`,
        link: `<a href="https://www.github.com/waterthatfrozen/EATERIO" target="_blank" class="text-decoration-none"><i class="bi bi-github"></i> GitHub: waterthatfrozen/EATERIO</a>`
    },{
        title: "LabRoom",
        subtitle: "Science Laboratory Assistant and Management System",
        year: "November 2017 - May 2018",
        description: `<i class="bi bi-award-fill"></i> First Runner-Up, Student Application Software Category, National Software Contest (NSC2018)`,
        link: `<a href="https://www.github.com/waterthatfrozen/LabRoomProject" target="_blank" class="text-decoration-none"><i class="bi bi-github"></i> GitHub: waterthatfrozen/LabRoomProject</a>`
    }
];

const otherExperience = [
    {
        year: "2022",
        titles: [
            "Head of Event, SIIT-PCSHS Online Roadshow and Python Workshop 2022",
            "Winner, SIIT Hackathon 2022, SIIT and Thairun",
            "Head of Photographer, SIIT'30 First Meet",
            "Head of Photographer, SIIT Insight Camp 2022",
        ]
    },{
        year: "2021",
        titles: [
            "President, SIIT Media Club of Academic Year 2021",
            "Head of Student Assistant, SIIT OSP Scholarship Central Examination 2021",
            "Head of Event, SIIT Online Roadshow 2021 EP.1-2"
        ]
    },{
        year: "2020",
        titles: [
            "President, SIIT Photo Club of Academic Year 2020",
            "Student Assistant, SIIT OSP Scholarship Central Examination 2020",
            "Head of Event, SIIT-PCSHS Online Talk 2020",
            "Photographer, 74th CU-TU Traditional Football Match"
        ]
    },{
        year: "2019",
        titles: [
            "Second Runner-up, SIIT Hackathon 2019"
        ]
    },{
        year: "2018",
        titles: [
            "Second Camp, POSN Computer Olympiad Camp, Prince of Songkhla University, Hat Yai Campus Center"
        ]
    },{
        year: "2017",
        titles: [
            "Participant in Japan-East Asia Network of Exchange Students and Youths (JENESYS2017)"
        ]
    }
];

const skill = [
    {
        category: "Languages",
        items: [ "Thai", "English"]
    },{
        category: "Programming Languages",
        items: [ "C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "PHP", "MATLAB"]
    },{
        category: "Frameworks",
        items: [ "Git/GitHub","Bootstrap", "Node.js", "Express.js", "jQuery", "MySQL", "MongoDB", "MS SQL Server", "Microsoft Azure", "React Native"]
    },{
        category: "Other",
        items: ["Photography", "Video Editing", "Graphic Design", "Microsoft Office", "Adobe Photoshop", "Adobe Premiere Pro", "Figma", "Event Organization", "Public Relations", "Presentation"]
    }
];

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
    const projectContainer = document.getElementById("project");
    const otherExperienceContainer = document.getElementById("other-experience");
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
    project.map((item,index) => {
        projectContainer.innerHTML += createMainItemCard(item.title, item.subtitle, item.year, item.description, item.link);
        if(index < project.length-1){
            projectContainer.innerHTML += `<hr/>`;
        }
    });
    otherExperience.map((item) => {
        otherExperienceContainer.innerHTML += createListItemCard(item.year, item.titles);
    });
    skill.map((item) => {
        skillContainer.innerHTML += createGridItemCard(item.category, item.items);
    });
}

window.onload = contentLoad;

// Go to top button
const topButton = document.getElementById("top-button");
const navLink = document.getElementById("nav-link");
let windowHeight = window.innerHeight;
window.onscroll = () => {
    if(document.body.scrollTop > windowHeight/2 || document.documentElement.scrollTop > windowHeight/2){
        // slowly fade in the button
        topButton.style.opacity = 1;
        navLink.style.opacity = 1;
    }else{
        // fade out
        topButton.style.opacity = 0;
        navLink.style.opacity = 0;
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