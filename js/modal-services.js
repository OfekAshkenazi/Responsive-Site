'use strict'

var gDropDownOpen = false

function onOpenModal() {
    document.querySelector('.modal-data').style.display = "flex"
    document.querySelector('.screen-modal').style.opacity = "1"
}

function onCloseModal() {
    document.querySelector('.modal-data').style.display = "none"
    document.querySelector('.screen-modal').style.opacity = "0"

}

function onDpOpen() {
    if (!gDropDownOpen) {
        document.querySelector('.drop-down').style.display = "block"
        document.querySelector('ul').style.overflow = "visible"
        gDropDownOpen = !gDropDownOpen
    } else {
        document.querySelector('.drop-down').style.display = "none"
        document.querySelector('ul').style.overflow = "hidden"
        gDropDownOpen = !gDropDownOpen
    }

}

//  menu area
function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}