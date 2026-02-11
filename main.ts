radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
radio.setGroup(1)
radio.sendString("Hello")
