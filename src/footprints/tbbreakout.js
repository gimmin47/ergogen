module.exports = {
    nets: {
        gnd: undefined,
        ss: undefined,
        sc: undefined,
        mo: undefined,
        mi: undefined,
        vcc: undefined
    },
    body: p => `
        
        (footprint "PMWTrackBallBreakout " (layer F.Cu) (tstamp 5BF2CC3C)
        (attr through_hole)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text user "VCC" (at -5.08 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "VCC" (at -5.08 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "MI" (at -2.54 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "MI" (at -2.54 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "MO" (at 0 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "MO" (at 0 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "SC" (at 2.54 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "SC" (at 2.54 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "SS" (at 5.08 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "SS" (at 5.08 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "GND" (at 7.62 -3  90) (layer "F.SilkS")(effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "GND" (at 7.62 -3  90) (layer "B.SilkS")(effects (font (size 1 1) (thickness 0.15)) (justify mirror)))

        ${'' /* pins */}
        (pad "" thru_hole circle locked (at -5.08 0 ${p.rot} ) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.net.vcc.str})
        (pad "" thru_hole circle locked (at -2.54 0 ${p.rot} ) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.net.mi.str})
        (pad "" thru_hole circle locked (at 0 0 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers  *.Cu *.Mask) ${p.net.mo.str})
        (pad "" thru_hole circle locked (at 2.54 0 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.net.sc.str})
        (pad "" thru_hole circle locked (at 5.08 0 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.net.ss.str})
        (pad "" thru_hole circle locked (at 7.62 0 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.net.gnd.str})
        )
        
        `
}
