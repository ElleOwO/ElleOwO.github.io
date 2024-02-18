function openNav() {
    console.log("Opening navigation");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.zIndex = "0";
    document.getElementById("close").style.zIndex = "99999";
    document.getElementById("return-icon").style.animation= "fadeIn 1s";



}

function closeNav() {
    console.log("Closing navigation");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.zIndex = "99999";
    document.getElementById("close").style.zIndex = "0";
    document.getElementById("return-icon").style.animation= "none!;";

}
