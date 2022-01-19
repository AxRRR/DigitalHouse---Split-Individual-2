
document.getElementById("mobileButton").addEventListener("click", () => showMenu());

let menuValue = false;
function showMenu(){
    if(!menuValue){
        document.getElementById("menuUser1").className = 'navigation__user visibilityEnable';
        document.getElementById("menuUser2").className = 'navigation__categories visibilityEnable';
        document.getElementById("menuInput").className = 'navigation__search visibilityEnable';
        return menuValue = true;
    }
    document.getElementById("menuUser1").className = 'navigation__user visibilityDisable';
    document.getElementById("menuUser2").className = 'navigation__categories visibilityDisable';
    document.getElementById("menuInput").className = 'navigation__search visibilityDisable';
    menuValue = false;
}

