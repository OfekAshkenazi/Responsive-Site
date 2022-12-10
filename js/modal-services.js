'use strict'









function onOpenModal() {
    document.querySelector('.modal-data').style.display = "flex"
    document.querySelector('.screen-modal').style.opacity = "1"
}

function onCloseModal() {
    document.querySelector('.modal-data').style.display = "none"
    document.querySelector('.screen-modal').style.opacity = "0"
   
}










//  menu area
function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}