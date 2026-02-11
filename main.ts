input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(100)
})
let reading = 0
basic.showIcon(IconNames.Diamond)
reading = input.lightLevel()
basic.pause(100)
