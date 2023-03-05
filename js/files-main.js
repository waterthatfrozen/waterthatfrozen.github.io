function createFileList(file){
    let tags = "";
    file.tag.sort((a,b) => tagPriority.indexOf(a) - tagPriority.indexOf(b));
    file.tag.forEach((tag, index) => {
        tags += `<span class="badge rounded-pill text-bg-${tagColor[tagPriority.indexOf(tag)]} fw-normal ${index !== 0 ? "d-none d-md-inline" : "d-inline"}">${tag}</span>&MediumSpace;`;
    });
    return `<li class="list-group-item">
        <div class="d-flex flex-row justify-content-between">
            <span class="${file.path === "#" ? "text-strikethrough" : ""}">
                <a href="${file.path}" target="_blank" rel="noopener noreferrer" class="${file.path === "#" ? "disabled" : ""}">
                    <i class="bi bi-file-earmark-pdf"></i>&MediumSpace;${file.code+" "+file.fileName}
                </a>
            </span>
            <span>
                ${tags}
            </span>
        </div>
    </li>`;
}

function createMainCard(fileList){
    fileList.list.sort((a,b) => {
        if(a.code < b.code) return -1;
        else if(a.code > b.code) return 1;
        else{
            if(tagPriority.indexOf(a.tag[0]) < tagPriority.indexOf(b.tag[0])) return -1;
            else if(a.tag[0] > b.tag[0]) return 1;
            else return 0;
        }
    });
    return `<div class="container border p-3 mb-3 rounded">
        <a href="#${fileList.id}" target="_self"><h5 class="text-danger" id="${fileList.id}">${fileList.title}</h5></a>
        ${fileList.code ? `<p class="mb-2">Code: ${fileList.code}</p>` : ""}
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