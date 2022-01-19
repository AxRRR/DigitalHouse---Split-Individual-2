// Creamos el evento al hacer clic en el menú hamburguesa obteniendolo por el ID de la etiqueta del icono.
document.getElementById("mobileButton").addEventListener("click", () => showMenu());

// Lógica para al clickear el botón detectar en que estado esta: (false = oculto, true = visible).
let menuValue = false;
function showMenu(){
    if(!menuValue){
        // Si está oculto aplicamos la clase 'visibilityEnable' para hacerlo visible.
        document.getElementById("menuUser1").className = 'navigation__user visibilityEnable';
        document.getElementById("menuUser2").className = 'navigation__categories visibilityEnable';
        document.getElementById("menuInput").className = 'navigation__search visibilityEnable';
        return menuValue = true;
    }
    // De lo contrario... solo ocultamos con la clase 'visibilityDisable'.
    document.getElementById("menuUser1").className = 'navigation__user visibilityDisable';
    document.getElementById("menuUser2").className = 'navigation__categories visibilityDisable';
    document.getElementById("menuInput").className = 'navigation__search visibilityDisable';
    return menuValue = false;
}


