let degres = 0
basic.forever(function () {
    degres = input.compassHeading()
    if (degres < 45) {
        basic.showString("N")
    } else if (degres < 135) {
        basic.showString("e")
    } else if (degres < 225) {
        basic.showString("s")
    } else if (degres < 315) {
        basic.showString("w")
    } else {
        basic.showString("N")
    }
})
