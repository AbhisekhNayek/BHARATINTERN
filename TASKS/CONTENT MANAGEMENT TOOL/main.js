function submitForm() {

    const titleElem = document.getElementById('title');
    const contentElem = document.getElementById('content');
    const imageElem = document.getElementById('image');
    const videoElem = document.getElementById('video');
    const dataSection = document.getElementById('dataSection');
    const imageurl = document.getElementById('addImageUrl');
    const videourl = document.getElementById('addVideoUrl');

    console.log(titleElem, contentElem, imageElem, videoElem, dataSection,imageurl,videourl); 

    const contentCard = document.createElement('div');
    contentCard.className = 'content-card';

    const h3 = document.createElement('h3');
    h3.textContent = titleElem.value;
    contentCard.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = contentElem.value;
    contentCard.appendChild(p);

    if (imageElem.files[0]) {
        const imagePreview = URL.createObjectURL(imageElem.files[0]);
        const img = document.createElement('img');
        img.src = imagePreview;
        img.alt = 'Uploaded Image';
        img.className = 'uploaded-content';
        contentCard.appendChild(img);
    }

    if (videoElem.files[0]) {
        const videoPreview = URL.createObjectURL(videoElem.files[0]);
        const vid = document.createElement('video');
        vid.src = videoPreview;
        vid.controls = true;
        vid.autoplay = true;
        vid.className = 'uploaded-content';
        contentCard.appendChild(vid);
    }

    dataSection.appendChild(contentCard);

    // Handle click events for adding images via URL
    document.getElementById("addImageUrl").addEventListener("click", (event) => {
        event.preventDefault();
        const imageUrl = prompt("Enter image URL:");
        if (imageUrl) {
        addToArticle(`<img src="${imageUrl}" alt="Image">`);
        }
    });

    // Handle click events for adding videos via URL
    document.getElementById("addVideoUrl").addEventListener("click", (event) => {
        event.preventDefault();
        const videoUrl = prompt("Enter video URL:");
        if (videoUrl) {
        addToArticle(
            `<video controls><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`
        );
        }
    });

    titleElem.value = '';
    contentElem.value = '';
    imageElem.value = '';
    videoElem.value = '';
    imageurl.value ='';
    videourl.value = '';

    // Save content to local storage before leaving the page
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("articles", JSON.stringify(storedArticles));
    });

    
}
