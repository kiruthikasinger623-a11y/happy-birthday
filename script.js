let currentSection = 0;

const sections = document.querySelectorAll(".journey-card");

function startJourney() {
    document.getElementById("startScreen").style.display = "none";

    document.getElementById("journey").classList.remove("hidden");

    showSection(0);
}

function showSection(index) {

    sections.forEach(section => {
        section.classList.remove("active");
    });

    if (sections[index]) {
        sections[index].classList.add("active");
    }
}

function nextSection() {

    currentSection++;

    if (currentSection < sections.length) {
        showSection(currentSection);
    }
}

function playVoice(number) {

    alert("Voice message " + number + " will be added later ❤️");

}
function addPhoto() {
    alert("Photo upload will be connected soon 📸");
}

function addVideo() {
    alert("Video upload will be connected soon 🎥");
}

function recordVoice() {
    alert("Voice recording will be connected soon 🎙️");
}

function addMusic() {
    alert("Music upload will be connected soon 🎵");
}

function addMemory() {
    alert("Memory editor will be connected soon 💌");
}