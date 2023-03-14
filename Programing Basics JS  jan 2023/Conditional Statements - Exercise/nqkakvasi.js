function perimeter (input ) {

    let radius = Number (input [0])

    let area = (Math.PI * Math.pow (radius,2))
    let perimeterr = 2 * Math.PI * radius

    console.log (area.toFixed(2))
    console.log (perimeterr.toFixed(2))

}

perimeter ([4.5])