input.onButtonPressed(Button.A, function () {
    wuKong.stopAllMotor()
})
let vzd = 0
music.playMelody("C5 B C5 B G A G A ", 500)
music.playMelody("A G A G B C5 B C5 ", 500)
basic.showLeds(`
    . . . . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
radio.setGroup(1)
wuKong.setAllMotor(-31, -32)
wuKong.setServoAngel(wuKong.ServoList.S7, 33)
basic.pause(1000)
wuKong.setAllMotor(31, 44)
wuKong.setServoAngel(wuKong.ServoList.S7, 10)
basic.pause(1000)
wuKong.stopAllMotor()
basic.forever(function () {
    vzd = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (vzd > 1 && vzd < 20) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            . . # . .
            . . # . .
            `)
        wuKong.setAllMotor(-24, -29)
        wuKong.setServoAngel(wuKong.ServoList.S7, 36)
        basic.pause(200)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngel(wuKong.ServoList.S7, 10)
    }
})
