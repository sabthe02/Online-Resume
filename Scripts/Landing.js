function goToResume() {
    window.location.href = '././index.html';
}

function goToContact() {
    window.location.href ='././Contact.html';
}

function goToAbout() {
    window.location.href = '././About.html';
}

function goToProjects() {
    window.location.href = '././Projects.html';
}

function goToHome() {
    window.location.href = '././landing.html';
}

function goToReferences() {
    window.location.href = '././References.html';
}

let number = document.querySelectorAll("h3").length;

for (let i =0; i <number;i++) {
    document.querySelectorAll("h3")[i].addEventListener("mouseenter", (event) =>{
        event.target.style.color = "rgb(0, 204, 255)";
    });
}
for (let i =0; i <number;i++) {
    document.querySelectorAll("h3")[i].addEventListener("mouseleave", (event) =>{
        event.target.style.color = "";
    });
}
