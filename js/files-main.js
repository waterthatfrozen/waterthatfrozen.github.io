function createFileList(file){
    let tags = "";
    switch(file.tag){
        case "Midterm":
            tags = `<span class="badge rounded-pill text-bg-warning fw-normal">Midterm</span>`; break;
        case "Final":
            tags = `<span class="badge rounded-pill text-bg-danger fw-normal">Final</span>`; break;
        case "Lab":
            tags = `<span class="badge rounded-pill text-bg-success fw-normal">Lab</span>`; break;
        case "Report":
            tags = `<span class="badge rounded-pill text-bg-primary fw-normal">Report</span>`; break;
        case "Review":
            tags = `<span class="badge rounded-pill text-bg-info fw-normal">Review</span>`; break;
        case "Other":
            tags = `<span class="badge rounded-pill text-bg-secondary fw-normal">Other</span>`; break;
        default: break;
    }
    return `<li class="list-group-item">
        <div class="d-flex flex-row justify-content-between">
            <span>
                <a href="${file.path}" target="_blank" rel="noopener noreferrer" class="disabled">
                    <i class="bi bi-file-earmark-pdf"></i>&MediumSpace;${file.code+" "+file.fileName}
                </a>
            </span>
            ${tags}
        </div>
    </li>`;
}

function createMainCard(fileList){
    fileList.list.sort((a,b) => {
        if(a.code < b.code) return -1;
        if(a.code > b.code) return 1;
        return 0;
    });
    return `<div class="container border p-3 mb-3 rounded">
        <a href="#${fileList.id}" target="_self"><h5 class="text-danger" id="${fileList.id}">${fileList.title}</h5></a>
        <p class="mb-2">Code: ${fileList.code}</p>
        <ul class="list-group list-group-flush">
            ${fileList.list.map(createFileList).join("")}
        </ul>
    </div>`;
}
function contentLoad(){
    const pdfList = document.getElementById("pdf-list");
    pdfList.innerHTML = fileLists.map(createMainCard).join("");
}

let currentTime = new Date();
const timeSpan = document.getElementById("time");
const copyrightSpan = document.getElementById("copyright");
copyrightSpan.innerHTML = `&copy; ${currentTime.getFullYear()} Paphana Yiwsiw`;
setInterval(() => {
    currentTime = new Date();
    timeSpan.innerHTML = `${currentTime.toLocaleString("en-UK",{timeZone: "Asia/Bangkok", hour12: false})}`;
}, 1000);

window.onload = contentLoad;