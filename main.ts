let reading = 0
basic.forever(function on_forever() {
    
    reading = input.lightLevel()
    led.plotBarGraph(reading, 255)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    
})
