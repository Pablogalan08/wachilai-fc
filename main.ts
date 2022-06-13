input.onGesture(Gesture.Shake, function () {
    icono = randint(0, 2)
    if (icono == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (icono == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (icono == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
let x = 0
let y = 0
let icono = 0
basic.showString("Hola mundo")
basic.showIcon(IconNames.Heart)
basic.showNumber(9)
basic.pause(100)
basic.showNumber(8)
basic.pause(100)
basic.showNumber(7)
basic.pause(100)
basic.showNumber(6)
basic.pause(100)
basic.showNumber(5)
basic.pause(100)
basic.showNumber(4)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showNumber(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        if (y < 4) {
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (y > 0) {
            led.unplot(x, y)
            y += -1
            led.plot(x, y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (x < 4) {
            led.unplot(x, y)
            x += 1
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -20) {
        basic.showString("<")
    }
    if (input.acceleration(Dimension.X) > 20) {
        basic.showString(">")
    }
    if (input.acceleration(Dimension.Y) > 20) {
        basic.showString("v")
    }
    if (input.acceleration(Dimension.Y) < -20) {
        basic.showString("^")
    }
})
