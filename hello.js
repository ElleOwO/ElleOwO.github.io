/**experimental script page for all features starting on index.html*/
import { loadModel, initScene } from './web-3dmodel-threejs-main/js/new.js';
initScene();
let obj = "kuromi";
loadModel(obj);

let open = document.querySelector("#open");
//create a close and open mode class style in css sheet later
open.addEventListener("click", () => {
    console.log("Opening navigation");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.zIndex = "999";
    document.getElementById("close").style.zIndex = "99999";
    const returnIcon = document.getElementById("return-icon");
    if (returnIcon) {
        returnIcon.style.animation = "fadeIn 1s";
    }
});

let close = document.querySelector("#close");
close.addEventListener("click", () => {
    console.log("Closing navigation");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.zIndex = "99999";
    document.getElementById("close").style.zIndex = "0";
    const returnIcon = document.getElementById("return-icon");
    if (returnIcon) {
        returnIcon.style.animation = "none";
    }
});

/**function closeNav() {
    console.log("Closing navigation");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.zIndex = "99999";
    document.getElementById("close").style.zIndex = "0";
    document.getElementById("return-icon").style.animation= "none!;";

}*/


// This version is created by Kevin Powell. Useful for saving UI each visit
//Connect variable to toggle ID
let darkMode = localStorage.getItem("darkMode");
let darkModeToggle = document.querySelector("#toggle");

//enable and disable dark mode
const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.getElementById("heart-frame").style.opacity= "10%";
    document.getElementById("heart-para").style.opacity= "10%";
            //document.getElementById("container-melody").style.display= "block";
            //document.getElementById("container3D").style.display= "none";
            //document.getElementById("container3D").style.zIndex = "-9999"
            //document.getElementById("container-melody").style.zIndex = "9999"

    console.log("toggle on pressed", darkMode);
    localStorage.setItem("darkMode", "enabled");
}
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document.getElementById("heart-frame").style.opacity= "40%";
    document.getElementById("heart-para").style.opacity= "40%";
            //document.getElementById("container-melody").style.display= "none";
            //document.getElementById("container3D").style.display= "block";
            //document.getElementById("container-melody").style.zIndex = "-9999"
            //document.getElementById("container3D").style.zIndex = "9999"
            //document.getElementById("container-melody").style.transform = "translateY(-1000px)";
            //document.getElementById("container3D").style.transform = "translateY(0px)";


    console.log("toggle off", darkMode);
    localStorage.setItem("darkMode", null);
}


// ... (existing code)

darkModeToggle.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");
    localStorage.setItem("darkMode", null);

    if (darkMode !== "enabled") {
        enableDarkMode();
        obj = "mymelody";
        // Load kuromi model

        // Load mymelody model
    } else {
        disableDarkMode();
        obj ="kuromi";
        // Load kuromi model

    }
});






