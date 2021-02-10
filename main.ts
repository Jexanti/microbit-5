input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (score))
})
input.onButtonPressed(Button.B, function () {
    score += -1
})
input.onGesture(Gesture.Shake, function () {
    num = randint(0, 2)
    if (num == 0) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . # . .
            # . . # .
            `)
    } else if (num == 1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . .
            # . . . .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    } else {
    	
    }
})
let num = 0
let score = 0
score = 0
