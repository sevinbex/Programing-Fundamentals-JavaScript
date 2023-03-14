function fb (input) {
    let skumriqPrice = Number (input[0]);
    let cacaPrice = Number (input [1]);
    let kgCountPalamud = Number (input[2]);
    let kgCountSafrid = Number (input [3]);
    let kgCountMidi = Number (input [4]);

    let palamudPrice = skumriqPrice * 1.6;
    let safridPrice = cacaPrice * 1.8;
    let midiPrice = 7.5;

    let totalPalamudBill = palamudPrice * kgCountPalamud;
    let totalSafridPrice = safridPrice * kgCountSafrid;
    let totalMidiPrice = midiPrice * kgCountMidi;

    let totalBill = totalPalamudBill + totalSafridPrice + totalMidiPrice;

            console.log (totalBill.toFixed (2))
}


fb ([5.55,3.57,4.3,3.6,7])