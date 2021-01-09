let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
