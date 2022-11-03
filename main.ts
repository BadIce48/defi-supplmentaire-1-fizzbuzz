let nombre = 0
input.onButtonPressed(Button.A, function () {
    nombre = randint(1, 100)
    basic.showNumber(nombre)
    if (nombre % 3 == 0 && nombre % 5 == 0) {
        basic.showString("FizzBuzz")
    } else if (nombre % 3 == 0) {
        basic.showString("Fizz")
    } else if (nombre % 5 == 0) {
        basic.showString("Buzz")
    }
})
