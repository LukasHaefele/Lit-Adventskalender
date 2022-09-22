/**
 * @type {HTMLAudioElement}
 */
const audio = document.getElementsByTagName("audio")[0];

/**
 * @type {HTMLElement}
 */
let kerze;

let playingId = -1;

function playAudio(id, element) {
    if (playingId != id) {
        playingId = id;

        audio.src = "audio/" + id.toString().padStart(3, "0") + ".m4a";
        audio.play();

        if (kerze) {
            kerze.classList.remove("playing", "paused");
        }
        kerze = element;
        element.classList.add("playing");
    } else {
        kerze.classList.toggle("paused", !audio.paused);
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}

function scale() {
    const kranz = document.getElementById("adventskranz");
    const size = (window.innerWidth * 0.75) + "px";
    kranz.style.width = size;
    kranz.style.height = size;
}

scale();

window.onresize = scale;