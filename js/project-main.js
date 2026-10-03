function createMainItemCard(title, subtitle, duration, description, link) {
  const projectId = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `<div class="px-3 pt-2">
        <h5 id="${projectId}" class="fw-semibold">${title ? title : ""}</h5>
        <h6>${subtitle ? subtitle : ""}</h6>
        <div class="fs-6">${duration ? duration : ""}</div>
        ${description ? `<div class="fs-6">${description}</div>` : ""}
        ${link ? `<div class="fs-6 mt-2">${link}</div>` : ""}
    </div>`;
}

function createProjectGuide() {
  const guideLinks = document.getElementById("project-guide-links");
  const projectHeadings = document.querySelectorAll("#project-list h5[id]");

  projectHeadings.forEach((heading) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.title = heading.textContent;
    listItem.appendChild(link);
    guideLinks.appendChild(listItem);
  });
}

function contentLoad() {
  const projectListContainer = document.getElementById("project-list");
  project.map((item, index) => {
    projectListContainer.innerHTML += createMainItemCard(
      item.title,
      item.subtitle,
      item.year,
      item.description,
      item.link,
    );
    if (index < project.length - 1) {
      projectListContainer.innerHTML += `<hr/>`;
    }
  });
  createProjectGuide();
}

// Go to top button
const topButton = document.getElementById("top-button");
const profileGuide = document.getElementById("profile-guide");
const profileGuideToggle = document.getElementById("profile-guide-toggle");
let windowHeight = window.innerHeight;

requestAnimationFrame(() => {
  profileGuide.classList.add("is-ready");
});

profileGuideToggle.addEventListener("click", () => {
  const isHidden = profileGuide.classList.toggle("is-hidden");
  profileGuideToggle.setAttribute("aria-expanded", String(!isHidden));
  profileGuideToggle.setAttribute(
    "aria-label",
    isHidden ? "Show navigation guide" : "Hide navigation guide",
  );
});
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
