const imgages = document.querySelectorAll(".BuchBild");
const tooltip = document.getElementById("tooltip");


const buch1 = document.getElementById("1Buch");
const buch2 = document.getElementById("2Buch");
const buch3 = document.getElementById("3Buch");
const buch4 = document.getElementById("4Buch");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");

const ol1 = document.getElementById("overlay1");
const ol2 = document.getElementById("overlay2");
const ol3 = document.getElementById("overlay3");
const ol4 = document.getElementById("overlay4");


imgages.forEach( img =>{
/* Wird ausgelöst, wenn die Maus über dem Bild bewegt wird */
img.addEventListener("mousemove", (e) => {
    // Tooltip an die Mausposition setzen
    tooltip.style.left = e.pageX + 15 + "px";  // 15px rechts von der Maus
    tooltip.style.top = e.pageY + 15 + "px";   // 15px unter der Maus
});

/* Wenn die Maus auf das Bild kommt */
img.addEventListener("mouseenter", () => {
    tooltip.style.opacity = 1; // Tooltip einblenden
});

/* Wenn die Maus das Bild verlässt */
img.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0; // Tooltip ausblenden
});
});





buch1.addEventListener("click", async () => {

    // HTML aus externer Datei laden
    const response = await fetch("buch1.html");
    const html = await response.text();

    modal1.innerHTML = html; // ins Modal einsetzen
    ol1.style.display = "flex";

    modal1.style.backgroundColor ="#663D5B";
    modal1.style.color = "rgba(255, 235, 205, 0.77)";
   
    
    modal1.querySelectorAll(".gridbox").forEach(el => {
    el.style.backgroundColor = "rgba(207,168,160,0.3)";
    });
    

    

});

buch2.addEventListener("click", async () => {

    // HTML aus externer Datei laden
    const response = await fetch("buch2.html");
    const html = await response.text();

    modal2.innerHTML = html; // ins Modal einsetzen
    ol2.style.display = "flex";

    modal2.style.backgroundColor ="#663D5B";
    modal2.style.color = "rgba(255, 235, 205, 0.77)";
   
    const gridbox = modal2.querySelectorAll(".gridbox")
    gridbox.forEach(el => {
    el.style.backgroundColor = "rgba(207,168,160,0.3)";
    });
    gridbox[0].style.display = "grid";
    
    

});
buch3.addEventListener("click", async () => {

    // HTML aus externer Datei laden
    const response = await fetch("buch3.html");
    const html = await response.text();

    modal3.innerHTML = html; // ins Modal einsetzen
    ol3.style.display = "flex";

    modal3.style.backgroundColor ="#663D5B";
    modal3.style.color = "rgba(255, 235, 205, 0.77)";
   
    
    modal3.querySelectorAll(".gridbox").forEach(el => {
    el.style.backgroundColor = "rgba(207,168,160,0.3)";
    });
    

    

});
buch4.addEventListener("click", async () => {

    // HTML aus externer Datei laden
    const response = await fetch("buch4.html");
    const html = await response.text();

    modal4.innerHTML = html; // ins Modal einsetzen
    ol4.style.display = "flex";

    modal4.style.backgroundColor ="#663D5B";
    modal4.style.color = "rgba(255, 235, 205, 0.77)";
   
    
    modal4.querySelectorAll(".gridbox").forEach(el => {
    el.style.backgroundColor = "rgba(207,168,160,0.3)";
    });
    

    

});


// schließen
document.addEventListener("click", (e) => {
    if (e.target.id === "closeModal") {
        overlay.style.display = "none";
    }
});

