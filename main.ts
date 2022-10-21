let Distance = 0
OmniBit.MotorStopAll()
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    Distance = CrocoKit_Sensor.Ultrasonic(DigitalPin.P9, DigitalPin.P10)
    if (Distance >= 20) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M2,
        200
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        200,
        SuperBit.enMotors.M4,
        200
        )
        basic.showIcon(IconNames.Heart)
    }
    while (Distance < 20) {
        SuperBit.MotorStopAll()
        basic.pause(500)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M2,
        200
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -200,
        SuperBit.enMotors.M4,
        -200
        )
        basic.pause(1000)
        SuperBit.MotorStopAll()
        basic.showIcon(IconNames.Butterfly)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M2,
        200
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        200,
        SuperBit.enMotors.M4,
        200
        )
        basic.showIcon(IconNames.No)
    }
})
