//Dropdown collapsible på kalender siden.
let coll = document.getElementsByClassName("collabs");
let i = 0;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            

        }
    });
}
//Kalender arrangmenter
//Har bruger vi lister og løkker til at sætte arrangementer ind i kalenderen. Her kunne man også hente data fra en database, men da vi ikke har sådan en, må vores liste agere som en.

const ARANG = function (dato, titel, beskrivelse, mereknap, bookknap, adresse, pris) {
    this.dato = dato;
    this.titel = titel;
    this.beskrivelse = beskrivelse;
    this.mereknap = mereknap;
    this.bookknap = bookknap;
    this.adresse = adresse;
    this.pris = pris;

    this.visAttributer = function () {
        return "<div class='t'> " + this.dato + "</div>  <div class='retreat-info'> <h3>" + this.titel + "</h3> <p> " + this.beskrivelse + "</p> <a href='" + this.mereknap + "' class='p-link'>Læs mere</a> <a href='" + this.bookknap + " ' class='s-link'>Book Nu</a></div> <div class='t' <p>" + this.adresse + "</p><br><p> " + this.pris + "</p>";
    };
};

const ARRANGEMENTER = [];
ARRANGEMENTER[0] = new ARANG("26. maj", "Fuldmåne Yoga", "Vi mødes under glastaget på tagterrassen med 360 graders udsyn til himmel og trætoppe. Klædt i behageligt blødt tøj - der er ingen (...)", "retreat.html", "retreat.html", "Hanklint vej 4", "200 kr.");
ARRANGEMENTER[1] = new ARANG("5. juni", "Selvomsorgsdag", "Lad op med selvomsorg i de skønneste omgivelser i området omkring Hanklit på Nordmors, molerlandskabet vi ynder at kalde Lille Himalaya(...)", "retreat.html", "retreat.html", "Hanklint vej 4", "810 kr.");
ARRANGEMENTER[2] = new ARANG("16-18. sep.", "Stille Retreat", "3 dage med stille væren og tid til fordybelse. Yoga, meditation, gåture og sund kost i de skønneste omgivelser og i den skønneste natur(...)", "retreat.html", "retreat.html", "Heltoften Bed and Breakfast", "3195 kr.");

const knap = document.getElementById("js-knap");

window.onload = function () {

    const arrangementer = document.getElementById("skudtud");
    arrangementer.innerHTML = "";

    for (let i = 0; i < ARRANGEMENTER.length; i++) {
        arrangementer.insertAdjacentHTML("beforeend", "<div class='retreats'>" + ARRANGEMENTER[i].visAttributer() + "</div");
    }
};

//knap der hopper til timeline
const hop = document.getElementById('jump-button');

hop.addEventListener("click", function () {
    let elmnt = document.getElementById("om-info");
    elmnt.scrollIntoView({
        behavior: "smooth"
    });
});

// Om-side video overlay play knap
//Meget lige til vil jeg sige :D
const video = document.getElementById("om-video");
const play = document.getElementById('video-play');

play.addEventListener("click", function () {
    if (video.paused) {
        play.style.opacity = '0';
        video.play();
    } else {
        video.pause();
        play.style.opacity = '1';
    }
});








//------------------------billedeslider JS---------------------//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("slider");
//  var dots = document.getElementsByClassName("doto");
//  if (n > slides.length) {slideIndex = 1;}
//  if (n < 1) {slideIndex = slides.length;}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";  
//  }
//  slides[slideIndex-1].style.display = "block";  
//}

//Fade on scroll

//knap.addEventListener("click", function () {
//
//    const arrangementer = document.getElementById("skudtud");
//    arrangementer.innerHTML = "";
//
//    for (let i = 0; i < ARRANGEMENTER.length; i++) {
//        arrangementer.insertAdjacentHTML("beforeend", "<div class='retreats'>" + ARRANGEMENTER[i].visAttributer() + "</div");
//    }
//});

////Modal shiiiiiiiit
//// Get the modal
//let modal = document.getElementById("modal");
//
//// Get the button that opens the modal
////let btn = document.getElementById('myBtn');
//
//// Get the <span> element that closes the modal
//let span = document.getElementsByClassName("close")[0];
//
//// When the user clicks the button, open the modal 
////btn.onclick = function () {
////    modal.style.display = "block";
////}
//$('#button1, #button2, #button3, #button4').click(function(event){ modal.style.display = "block"; });
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//    modal.style.display = "none";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}
