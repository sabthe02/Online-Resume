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

document.getElementById('mouseover').addEventListener("mouseover", (event) => {
            switch (event.target.className) {
                case 'home':
                case 'about':
                case'projects':
                case 'contact':
                case 'references':
                case 'resume':
                event.target.style.color = "rgb(0, 204, 255)";
            }

        setTimeout(()=>{
            event.target.style.color = "";
        }, 500);
    }, 
    false,
);
