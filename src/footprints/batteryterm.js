module.exports = {
    nets: {
        from: undefined,
        to: undefined,
    },
    body: p => `
        
        (footprint "PMWTrackBallBreakout " (layer F.Cu) (tstamp 5BF2CC3C)
        (attr through_hole)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text user "BAT+" (at 2 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "BAT+" (at 2 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "GND" (at -2 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "GND" (at -2 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))

        ${'' /* pins */}
        (pad "" thru_hole circle locked (at 2 0 ${p.rot} ) (size 2 2) (drill 1.3) (layers *.Cu *.Mask) ${p.net.from.str})
        (pad "" thru_hole circle locked (at -2 0 ${p.rot}) (size 2 2) (drill 1.3) (layers  *.Cu *.Mask) ${p.net.to.str})
        )
        
        `
}
