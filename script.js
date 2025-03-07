const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function showContent(contentId) {
    const contents = document.getElementsByClassName('content');
    for (let content of contents) {
        content.classList.remove('active')
    }

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active')
    }
}

function openLightbox(imgElement) {
    lightboxImg.src = imgElement.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showContent('home');
});
document.addEventListener("keydown", function(event) {
    console.log("Key down: ", event.key);
    if (event.key === "Escape") {
        closeLightbox();
    }
});
document.addEventListener("click", function(event) {
    // closeLightbox();
});
