basic.forever(function () {
    basic.showNumber(smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1))
})
