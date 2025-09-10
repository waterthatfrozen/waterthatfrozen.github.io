function createImage(basePath, albumName, index, shouldLazyLoad = true){
    const imageSrc = `img/gallery/${basePath}/${index}.jpg`;
    const placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
    
    return `<div class="col mb-3">
        <div class="image-container" data-image-index="${index}" data-image-src="${imageSrc}" data-album-name="${albumName}">
            <img 
                ${shouldLazyLoad ? `data-src="${imageSrc}"` : `src="${imageSrc}"`}
                ${shouldLazyLoad ? `src="${placeholderSrc}"` : ''}
                class="img-fluid rounded border border-secondary shadow ${shouldLazyLoad ? 'lazy-image' : ''}" 
                alt="Image from ${albumName}" 
                id="image-${index}"
                loading="${shouldLazyLoad ? 'lazy' : 'eager'}"
                width="300" 
                height="200">
            ${shouldLazyLoad ? '<div class="loading-spinner"><div class="spinner"></div></div>' : ''}
        </div>
    </div>`;
}

// Modal state management
let currentAlbum = null;
let currentImageList = [];
let currentImageIndex = 0;
let modalOpen = false;

function createImageBoxes(album){
    let imageBoxes = "";
    let imageCount = 0;
    const immediateLoadCount = 0; // Load first 0 images immediately
    
    // Store current album for modal navigation
    currentAlbum = album;
    currentImageList = [];
    
    for (let i = album.first; i <= album.last; i++) {
        if(!album.excluded.includes(i)){
            const shouldLazyLoad = imageCount >= immediateLoadCount;
            imageBoxes += createImage(album.basePath, album.name, i, shouldLazyLoad);
            currentImageList.push(i); // Store image indices for navigation
            imageCount++;
        }
    }
    return imageBoxes;
}

// Modal functionality
function openModal(imageIndex) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalCounter');
    const modalTitle = document.getElementById('modalTitle');
    const modalLoading = modal.querySelector('.modal-loading');
    
    // Find the index in our image list
    currentImageIndex = currentImageList.indexOf(parseInt(imageIndex));
    if (currentImageIndex === -1) return;
    
    // Ensure modal image is never blurred from the start
    modalImage.classList.remove('lazy-image');
    modalImage.classList.add('loaded');
    modalImage.style.filter = 'none';
    
    modal.style.display = 'flex';
    modalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Update counter and title
    modalCounter.textContent = `${currentImageIndex + 1} / ${currentImageList.length}`;
    modalTitle.textContent = currentAlbum.name;
    
    // Load the image
    loadModalImage();
    
    // Update navigation button states
    updateNavButtons();
    
    // Add animation class
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('modal-active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modalOpen = false;
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

function loadModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalLoading = document.querySelector('.modal-loading');
    const imageIndex = currentImageList[currentImageIndex];
    const imageSrc = `img/gallery/${currentAlbum.basePath}/${imageIndex}.jpg`;
    
    // Ensure modal image never has lazy classes or blur
    modalImage.classList.remove('lazy-image');
    modalImage.classList.add('loaded');
    modalImage.style.filter = 'none';
    
    // Show loading spinner
    modalLoading.style.display = 'flex';
    modalImage.style.opacity = '0';
    
    // Load the image
    const tempImg = new Image();
    tempImg.onload = () => {
        modalImage.src = imageSrc;
        modalImage.style.opacity = '1';
        modalImage.style.filter = 'none';
        modalImage.classList.remove('lazy-image');
        modalImage.classList.add('loaded');
        modalLoading.style.display = 'none';
        
        // Update URL hash
        window.history.replaceState(null, null, `#image-${imageIndex}`);
    };
    
    tempImg.onerror = () => {
        modalLoading.style.display = 'none';
        modalImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2NjY2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm9yIExvYWRpbmcgSW1hZ2U8L3RleHQ+PC9zdmc+';
        modalImage.style.opacity = '1';
        modalImage.style.filter = 'none';
        modalImage.classList.remove('lazy-image');
        modalImage.classList.add('loaded');
    };
    
    tempImg.src = imageSrc;
}

function navigateModal(direction) {
    if (direction === 'next' && currentImageIndex < currentImageList.length - 1) {
        currentImageIndex++;
    } else if (direction === 'prev' && currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        return; // No navigation possible
    }
    
    // Update counter
    const modalCounter = document.getElementById('modalCounter');
    modalCounter.textContent = `${currentImageIndex + 1} / ${currentImageList.length}`;
    
    // Load new image
    loadModalImage();
    updateNavButtons();
}

function updateNavButtons() {
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    prevBtn.style.opacity = currentImageIndex > 0 ? '1' : '0.3';
    nextBtn.style.opacity = currentImageIndex < currentImageList.length - 1 ? '1' : '0.3';
    
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === currentImageList.length - 1;
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateModal('prev');
        } else {
            navigateModal('next');
        }
    }
}

// Event listeners setup
function setupModalEventListeners() {
    const modal = document.getElementById('imageModal');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalImageContainer = modal.querySelector('.modal-image-container');
    
    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Navigation events
    modalPrev.addEventListener('click', () => navigateModal('prev'));
    modalNext.addEventListener('click', () => navigateModal('next'));
    
    // Prevent accidental navigation when clicking image
    modalImageContainer.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent modal from closing when clicking image
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modalOpen) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                navigateModal('prev');
                break;
            case 'ArrowRight':
                navigateModal('next');
                break;
        }
    });
    
    // Touch events for mobile swipe
    modal.addEventListener('touchstart', handleTouchStart, false);
    modal.addEventListener('touchend', handleTouchEnd, false);
    
    // Image click events for opening modal
    document.addEventListener('click', (e) => {
        const imageContainer = e.target.closest('.image-container');
        if (imageContainer) {
            e.preventDefault();
            const imageIndex = imageContainer.dataset.imageIndex;
            openModal(imageIndex);
        }
    });
}

// Lazy loading implementation using Intersection Observer
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const container = img.closest('.image-container');
                    const spinner = container.querySelector('.loading-spinner');
                    
                    // Show loading spinner
                    if (spinner) spinner.style.display = 'block';
                    
                    // Load the actual image
                    const actualSrc = img.dataset.src;
                    const tempImg = new Image();
                    
                    tempImg.onload = () => {
                        img.src = actualSrc;
                        img.classList.remove('lazy-image');
                        img.classList.add('loaded');
                        // Force remove any blur filter
                        img.style.filter = 'none';
                        if (spinner) spinner.style.display = 'none';
                    };
                    
                    tempImg.onerror = () => {
                        img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2NjY2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm9yIExvYWRpbmc8L3RleHQ+PC9zdmc+';
                        img.classList.remove('lazy-image');
                        img.classList.add('error');
                        if (spinner) spinner.style.display = 'none';
                        console.warn(`Failed to load image: ${actualSrc}`);
                    };
                    
                    tempImg.src = actualSrc;
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before image comes into view
            threshold: 0.1
        });

        lazyImages.forEach((img) => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without Intersection Observer
        lazyImages.forEach((img) => {
            img.src = img.dataset.src;
            img.classList.remove('lazy-image');
            img.classList.add('loaded');
            img.style.filter = 'none';
        });
    }
}

function hashchange(){
    // If modal is open, don't highlight thumbnails
    if (modalOpen) return;
    
    // highlight the current image
    let currentImage = window.location.hash;

    // remove the border from all images
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.classList.remove("border-warning");
    });

    // add border to the current image
    const currentImageElement = document.querySelector(currentImage);
    if (currentImageElement) {
        currentImageElement.classList.add("border-warning");
        
        // If the highlighted image is lazy and not loaded yet, prioritize loading it
        if (currentImageElement.classList.contains('lazy-image')) {
            const actualSrc = currentImageElement.dataset.src;
            if (actualSrc) {
                currentImageElement.src = actualSrc;
                currentImageElement.classList.remove('lazy-image');
                currentImageElement.classList.add('loaded');
                currentImageElement.style.filter = 'none';
            }
        }
    }
}

function contentLoad(){
    // Obtain album parameter from url
    const urlParams = new URLSearchParams(window.location.search);
    const albumID = urlParams.get("album");
    currentAlbum = albums.find(item => item.id == albumID);
    if (!currentAlbum) { window.location.href = "gallery-main.html"; }
    
    // Set album name
    const albumName = document.getElementById("album-name");
    albumName.innerHTML = currentAlbum.name;

    // Set album description
    const albumDescription = document.getElementById("album-description");
    albumDescription.innerHTML = currentAlbum.description;

    // Create image box
    const imageGridContainer = document.getElementById("image-grid");
    imageGridContainer.innerHTML = createImageBoxes(currentAlbum);

    // Initialize lazy loading after images are created
    setTimeout(() => {
        initializeLazyLoading();
    }, 100);

    // Setup modal event listeners
    setupModalEventListeners();

    // Highlight current image border
    let currentImage = window.location.hash;
    hashchange();
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

// listen for hash change
window.addEventListener("hashchange", hashchange);