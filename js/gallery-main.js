function createListItem(item) {
  let numberOfItems = item.last - item.first + 1 - item.excluded.length;
  return `<li class="list-group-item">
        <a href="gallery-view.html?album=${item.id}" target="_self" class="">
            <i class="bi bi-image"></i>&MediumSpace; ${item.name} <span class="small text-secondary">(${numberOfItems} items)</span>
        </a>
    </li>`;
}

function createMainItemCard(list) {
  return `<ul class="list-group list-group-flush">
        <li class="list-group-item">
            <a href="graduation.html" target="_self" class="">
                <i class="bi bi-image"></i>&MediumSpace; Thammasat University Graduation Ceremony and Rehearsals 2022-2023
            </a>
        </li>
        ${list.map((item) => createListItem(item)).join("")}
    </ul>`;
}
function contentLoad() {
  const galleryListContainer = document.getElementById("gallery-list");
  galleryListContainer.innerHTML = createMainItemCard(albums);
}

// Go to top button
const topButton = document.getElementById("top-button");
let windowHeight = window.innerHeight;
window.onscroll = () => {
  if (
    document.body.scrollTop > windowHeight / 4 ||
    document.documentElement.scrollTop > windowHeight / 4
  ) {
    // slowly fade in the button
    topButton.style.opacity = 1;
  } else {
    // fade out
    topButton.style.opacity = 0;
  }
};

window.onresize = () => {
  windowHeight = window.innerHeight;
};

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
