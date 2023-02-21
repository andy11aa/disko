input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Reverse, 60, takt * 2)
    basic.pause(takt)
    bitbot.rotatems(BBRobotDirection.Left, 30, takt / 2)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 80, takt / 2)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 65, takt)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 65, takt)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 65, takt)
    basic.pause(takt)
    bitbot.rotatems(BBRobotDirection.Right, 32, takt)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 100, takt)
    basic.pause(takt)
    bitbot.goms(BBDirection.Reverse, 100, takt)
    basic.pause(takt)
    bitbot.goms(BBDirection.Forward, 100, takt)
})
let takt = 0
takt = 467.75
basic.forever(function () {
	
})
