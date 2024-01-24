function openNav() {
    console.log("Opening navigation");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.zIndex = "0";
    document.getElementById("close").style.zIndex = "99999";

}

function closeNav() {
    console.log("Closing navigation");
    document.getElementById("open").style.animation ="fade-in 10s";

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.zIndex = "99999";
    document.getElementById("close").style.zIndex = "0";
}
