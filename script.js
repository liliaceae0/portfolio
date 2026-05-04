function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "la programmation",
    "la robotique",
    "la cybersécurité",
    "l'OSINT",
    "les CTF",
    "la physique quantique",
    "la psychologie",
    "les arts martiaux",
    "l'histoire",


]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.production-thumb img').forEach(function (img) {
        img.addEventListener('click', function () {
            window.open(this.src, '_blank');
        });
    });

    var cf = document.getElementById('contactForm');
    if (cf) {
        cf.addEventListener('submit', function (e) {
            e.preventDefault();
            var n   = document.getElementById('cName').value;
            var em  = document.getElementById('cEmail').value;
            var msg = document.getElementById('cMsg').value;
            window.location.href = 'mailto:esraatia.pro@gmail.com'
                + '?subject=' + encodeURIComponent('Message de ' + n)
                + '&body='    + encodeURIComponent('De : ' + n + '\nEmail : ' + em + '\n\n' + msg);
        });
    }
});