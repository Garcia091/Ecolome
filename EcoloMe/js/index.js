import { saveVideo, onGetTasks } from "./firebase_vi.js";

const videoForm = document.getElementById("video-form");

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

window.addEventListener('DOMContentLoaded', async () => {

    onGetTasks((querySnapshot) => {
        const taks = document.createElement('div')

        querySnapshot.forEach((doc) => {
            let datos = doc.data()

            templateCard.querySelector('h3').textContent = datos.title ;
            templateCard.querySelector('iframe').setAttribute('src', datos.video);
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
           
        });
        items.appendChild(fragment)
    })
})

videoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = videoForm["video-title"];
    const url = videoForm["video-url"];

    saveVideo(title.value, url.value);

    videoForm.reset();
})

