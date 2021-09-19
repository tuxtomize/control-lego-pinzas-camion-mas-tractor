input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("parar")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("alante")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("izquierda")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString("cerrar")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("derecha")
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("abrir")
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
