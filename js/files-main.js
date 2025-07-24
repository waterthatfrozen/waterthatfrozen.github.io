// Global filtering state
let activeFilters = new Set();
let allFiles = [];
let filterLogic = 'and'; // 'and' or 'or'

function createFileList(file, includeDataAttributes = false){
    let tags = "";
    file.tag.sort((a,b) => tagPriority.indexOf(a) - tagPriority.indexOf(b));
    file.tag.forEach((tag, index) => {
        tags += `<span class="badge rounded-pill text-bg-${tagColor[tagPriority.indexOf(tag)]} fw-normal ${index !== 0 ? "d-none d-md-inline" : "d-inline"}">${tag}</span>&MediumSpace;`;
    });
    
    const dataAttributes = includeDataAttributes ? `data-tags='${JSON.stringify(file.tag)}'` : '';
    
    return `<li class="list-group-item file-item" ${dataAttributes}>
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
    return `<div class="container border p-3 mb-3 rounded semester-section" data-semester="${fileList.id}">
        <a href="#${fileList.id}" target="_self"><h5 class="text-danger" id="${fileList.id}">${fileList.title}</h5></a>
        ${fileList.code ? `<p class="mb-2">Code: ${fileList.code}</p>` : ""}
        <ul class="list-group list-group-flush">
            ${fileList.list.map(file => createFileList(file, true)).join("")}
        </ul>
    </div>`;
}

function getAllTags() {
    const tagCounts = {};
    allFiles.forEach(file => {
        file.tag.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });
    return tagCounts;
}

function createFilterButtons() {
    const tagCounts = getAllTags();
    const tagFiltersContainer = document.getElementById('tagFilters');
    
    // Sort tags by count in descending order
    const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
    
    tagFiltersContainer.innerHTML = sortedTags
        .map(([tag, count]) => {
            return `
                <button class="filter-tag" data-tag="${tag}">
                    <i class="bi bi-tags"></i>
                    ${tag}
                    <span class="count">${count}</span>
                </button>
            `;
        }).join('');
    
    // Add event listeners to filter buttons
    tagFiltersContainer.addEventListener('click', (e) => {
        if (e.target.closest('.filter-tag')) {
            const button = e.target.closest('.filter-tag');
            const tag = button.dataset.tag;
            toggleFilter(tag, button);
        }
    });
}

function toggleFilter(tag, button) {
    const icon = button.querySelector('i');
    
    if (activeFilters.has(tag)) {
        // Deactivate filter
        activeFilters.delete(tag);
        button.classList.remove('active');
        icon.className = 'bi bi-tags';
    } else {
        // Activate filter
        activeFilters.add(tag);
        button.classList.add('active');
        icon.className = 'bi bi-check-circle-fill';
    }
    
    applyFilters();
    updateFilterCounter();
}

function applyFilters() {
    const fileItems = document.querySelectorAll('.file-item');
    const semesterSections = document.querySelectorAll('.semester-section');
    
    if (activeFilters.size === 0) {
        // Show all files when no filters are active
        fileItems.forEach(item => item.classList.remove('filtered-out'));
        semesterSections.forEach(section => section.classList.remove('filtered-out'));
        hideEmptyState();
        return;
    }
    
    let visibleFilesCount = 0;
    
    fileItems.forEach(item => {
        const fileTags = JSON.parse(item.dataset.tags);
        let shouldShow = false;
        
        if (filterLogic === 'and') {
            // AND condition: file must have ALL selected tags
            shouldShow = Array.from(activeFilters).every(tag => fileTags.includes(tag));
        } else {
            // OR condition: file must have ANY selected tag
            shouldShow = Array.from(activeFilters).some(tag => fileTags.includes(tag));
        }
        
        if (shouldShow) {
            item.classList.remove('filtered-out');
            visibleFilesCount++;
        } else {
            item.classList.add('filtered-out');
        }
    });
    
    // Hide/show semester sections based on whether they have visible files
    semesterSections.forEach(section => {
        const visibleFiles = section.querySelectorAll('.file-item:not(.filtered-out)');
        if (visibleFiles.length === 0) {
            section.classList.add('filtered-out');
        } else {
            section.classList.remove('filtered-out');
        }
    });
    
    // Show empty state if no files are visible
    if (visibleFilesCount === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
    }
}

function updateFilterCounter() {
    const counter = document.getElementById('filterCounter');
    if (activeFilters.size === 0) {
        counter.textContent = '(All files shown)';
    } else {
        const visibleFiles = document.querySelectorAll('.file-item:not(.filtered-out)').length;
        const tagList = Array.from(activeFilters).join(filterLogic === 'and' ? ' + ' : ' | ');
        const logicText = filterLogic === 'and' ? 'ALL' : 'ANY';
        counter.textContent = `(${visibleFiles} files with ${logicText}: ${tagList})`;
    }
}

function clearAllTags() {
    const filterButtons = document.querySelectorAll('.filter-tag');
    activeFilters.clear();
    
    filterButtons.forEach(button => {
        const icon = button.querySelector('i');
        button.classList.remove('active');
        icon.className = 'bi bi-tags';
    });
    
    applyFilters();
    updateFilterCounter();
}

function toggleFilterSection() {
    const filterContent = document.getElementById('filterContent');
    const collapseIcon = document.getElementById('collapseIcon');
    const filterHeader = document.getElementById('filterHeader');
    
    if (filterContent.classList.contains('collapsed')) {
        // Expand
        filterContent.classList.remove('collapsed');
        filterHeader.classList.remove('collapsed');
        collapseIcon.classList.remove('collapsed');
    } else {
        // Collapse
        filterContent.classList.add('collapsed');
        filterHeader.classList.add('collapsed');
        collapseIcon.classList.add('collapsed');
    }
}

function toggleFilterLogic(logic) {
    filterLogic = logic;
    
    // Update toggle UI
    const logicOptions = document.querySelectorAll('.logic-option');
    logicOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.logic === logic);
    });
    
    // Reapply filters with new logic
    applyFilters();
    updateFilterCounter();
}

function showEmptyState() {
    let emptyState = document.getElementById('filterEmptyState');
    if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.id = 'filterEmptyState';
        emptyState.className = 'filter-empty-state';
        document.getElementById('pdf-list').appendChild(emptyState);
    }
    
    const logicText = filterLogic === 'and' ? 'ALL' : 'ANY';
    const explanation = filterLogic === 'and' 
        ? 'Files must contain ALL selected tags to be shown. Try selecting fewer tags or switching to OR logic.'
        : 'No files contain ANY of the selected tags. Try selecting different tags or switching to AND logic.';
    
    emptyState.innerHTML = `
        <i class="bi bi-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
        <h5>No files match the ${logicText} condition</h5>
        <p>${explanation}</p>
    `;
    emptyState.style.display = 'block';
}

function hideEmptyState() {
    const emptyState = document.getElementById('filterEmptyState');
    if (emptyState) {
        emptyState.style.display = 'none';
    }
}

function contentLoad(){
    // Collect all files for filtering
    allFiles = [];
    fileLists.forEach(semester => {
        allFiles.push(...semester.list);
    });
    
    // Render the PDF list
    const pdfList = document.getElementById("pdf-list");
    pdfList.innerHTML = fileLists.map(createMainCard).join("");
    
    // Create filter buttons
    createFilterButtons();
    
    // Set up filter control buttons
    document.getElementById('clearAllTags').addEventListener('click', clearAllTags);
    
    // Set up collapsible filter section
    document.getElementById('filterHeader').addEventListener('click', toggleFilterSection);
    
    // Event listener for logic toggle
    document.getElementById('logicToggle').addEventListener('click', (e) => {
        if (e.target.classList.contains('logic-option')) {
            const logic = e.target.dataset.logic;
            toggleFilterLogic(logic);
        }
    });
    
    // Initialize counter
    updateFilterCounter();
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