radio.onReceivedValue(function (name, value) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    // or this??
    if (name == "alert" && value == 1) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(2)
music.playTone(262, music.beat(BeatFraction.Whole))
let min_soil_moisture = 251
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
