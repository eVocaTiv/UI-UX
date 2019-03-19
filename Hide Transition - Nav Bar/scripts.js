
// 1 means navbar is open
var toggleStatus = 1;

function toggleMenu() { 
    if(toggleStatus === 1) {
        document.getElementById("menu").style.left = "-240px";
        toggleStatus = 0;
    }
    else {
        document.getElementById("menu").style.left = "0px";
        toggleStatus = 1;
    }
}
