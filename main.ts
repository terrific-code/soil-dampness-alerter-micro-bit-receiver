radio.onReceivedValue(function (name, value) {
    // or this??
    if (name == "alert" && value == 1) {
        music.play(music.stringPlayable("C5 C C5 A G C5 C G ", 120), music.PlaybackMode.UntilDone)
    }
})
let min_soil_moisture = 251
