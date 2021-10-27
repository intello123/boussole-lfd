let degres = 0
basic.forever(function () {
    degres = input.compassHeading()
    if (degres < 45) {
        basic.showString("N")
    } else if (degres < 135) {
        basic.showString("E")
    } else if (degres < 225) {
        basic.showString("S")
    } else if (degres < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
