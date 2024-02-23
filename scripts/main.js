/* main script template for all pages**/
let open = document.querySelector("#open");
//create a close and open mode class style in css sheet later
open.addEventListener("click", () => {
    console.log("Opening navigation");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.zIndex = "0";
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




