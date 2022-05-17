module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Toggle
        side: 'F'
    },
    body: p => {

        const left = p.param.side == 'F' ? '-' : ''
        const right = p.param.side == 'F' ? '' : '-'

        return `
        
        (footprint "MSK-12D19:Slider" (layer F.Cu) (tstamp 5BF2CC3C)
        (attr through_hole)

            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
            
            ${'' /* outline */}
            (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
            (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
            (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer ${p.param.side}.SilkS) (width 0.15))
            (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer ${p.param.side}.SilkS) (width 0.15))
            (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
            (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
            
            ${'' /* extra indicator for the slider */}
            (fp_line (start -1.95 -3.85) (end 1.95 -3.85) (layer Dwgs.User) (width 0.15))
            (fp_line (start 1.95 -3.85) (end 1.95 -1.35) (layer Dwgs.User) (width 0.15))
            (fp_line (start -1.95 -1.35) (end -1.95 -3.85) (layer Dwgs.User) (width 0.15))
            
            ${'' /* pins */}
            (pad "" through_hole circle locked (at 3.7 -1.8 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask))
            (pad "" through_hole circle locked (at 3.7 1.1 ${p.rot}) (size 2 2) (drill 1.3) (layers  *.Cu *.Mask)) ${p.net.from.str})
            (pad "" through_hole circle locked (at 3.7 4 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask)) ${p.net.to.str})
        )
        
        `
    }
}
