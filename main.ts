input.onButtonPressed(Button.A, function () {
    while (input.buttonIsPressed(Button.A)) {
        tps_chrono += 1
        basic.pause(100)
        basic.showNumber(tps_chrono)
    }
    basic.showNumber(tps_chrono)
})
input.onButtonPressed(Button.B, function () {
    tps_chrono = 0
    basic.showNumber(tps_chrono)
})
let tps_chrono = 0
basic.clearScreen()
tps_chrono = 0
basic.showNumber(tps_chrono)
