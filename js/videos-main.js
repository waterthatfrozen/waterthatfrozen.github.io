function createVideoList(video) {
  let tags = "";
  video.tag.sort((a, b) => tagPriority.indexOf(a) - tagPriority.indexOf(b));
  video.tag.forEach((tag, index) => {
    tags += `<span class="badge rounded-pill text-bg-${tagColor[tagPriority.indexOf(tag)]} fw-normal ${index !== 0 ? "d-none d-md-inline" : "d-inline"}">${tag}</span>&MediumSpace;`;
  });
  return `<li class="list-group-item">
        <div class="d-flex flex-row justify-content-between">
            <span class="${video.path === "#" ? "text-strikethrough" : ""}">
                <a href="${video.path}" target="_blank" rel="noopener noreferrer" class="${video.path === "#" ? "disabled" : ""}">
                <i class="bi bi-play-circle"></i>&MediumSpace;${video.code + " " + video.videoName}
                </a>
            </span>
            <span>
                ${tags}
            </span>
        </div>
    </li>`;
}

function createMainCard(videoList) {
  videoList.list.sort((a, b) => {
    if (a.code < b.code) return -1;
    else if (a.code > b.code) return 1;
    else {
      if (tagPriority.indexOf(a.tag[0]) < tagPriority.indexOf(b.tag[0]))
        return -1;
      else if (a.tag[0] > b.tag[0]) return 1;
      else return 0;
    }
  });
  return `<div class="container border p-3 mb-3 rounded">
        <a href="#${videoList.id}" target="_self"><h5 class="text-danger" id="${videoList.id}">${videoList.title}</h5></a>
        <p class="mb-2">
            <a href="${videoList.midterm}" target="_blank"><i class="bi bi-film"></i>&MediumSpace;Midterm Full Playlist</a><br/>
            ${videoList.final ? `<a href="${videoList.final}" target="_blank"><i class="bi bi-film"></i>&MediumSpace;Final Full Playlist</a>` : ""}
        </p>
        <ul class="list-group list-group-flush">
            ${videoList.list.map(createVideoList).join("")}
        </ul>
    </div>`;
}
function contentLoad() {
  const videoList = document.getElementById("video-list");
  videoList.innerHTML = videoLists.map(createMainCard).join("");
}

const timeSpan = document.getElementById("time");
const copyrightSpan = document.getElementById("copyright");
copyrightSpan.innerHTML = `&copy; ${new Date().getFullYear()} Paphana Yiwsiw`;

const getCurrentTimeString = () => {
  let currentTime = new Date();
  let hour = currentTime.getHours().toString().padStart(2, "0");
  let minute = currentTime.getMinutes().toString().padStart(2, "0");
  let day = currentTime.getDate().toString().padStart(2, "0");
  let month = (currentTime.getMonth() + 1).toString().padStart(2, "0");
  let year = currentTime.getFullYear();
  timeSpan.innerHTML = `${year}-${month}-${day} / ${hour}:${minute}`;
};

getCurrentTimeString();
setInterval(() => {
  const currentTime = new Date();
  if (currentTime.getSeconds() === 0) {
    getCurrentTimeString();
  }
}, 1000);

window.onload = contentLoad;
