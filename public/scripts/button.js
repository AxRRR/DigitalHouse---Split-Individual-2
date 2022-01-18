// const buttonClick = document.getElementById('mobile_button').innerText;
document.getElementById("mobileButton").addEventListener("click", () => showMenu());

let menuValue = false;
function showMenu(){
    if(!menuValue){
        document.getElementById("menuUser1").className = 'navigation--user visibilityEnable';
        document.getElementById("menuUser2").className = 'navigation--categories visibilityEnable';
        document.getElementById("menuInput").className = 'navigation--search visibilityEnable';
        console.log(menuValue);
        return menuValue = true;
    }
    console.log(menuValue);
    document.getElementById("menuUser1").className = 'navigation--user visibilityDisable';
    document.getElementById("menuUser2").className = 'navigation--categories visibilityDisable';
    document.getElementById("menuInput").className = 'navigation--search visibilityDisable';
    menuValue = false;
}

