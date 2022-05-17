module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
        side: 'F'
    },
    body: p => `

    (footprint "kbd:ResetSW" (layer "F.Cu")
    (tedit 5AD77D8C)
    (at 192.9 107 90)
    (path "/00000000-0000-0000-0000-00005a5eb9e2")
    (attr through_hole)
    (fp_text reference "${p.ref}" (at 0.265 0.73 90) (layer "${p.param.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
    (fp_text value "Reset" (at 0 0 90) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp f33e308f-0265-422d-8187-61c261b1d726)
    )
    (fp_text user "Reset" (at 0.127 0 90) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      (tstamp e4750e3c-f5f8-48c0-88b6-79f42ce33c44)
    )

    ${'' /* outline */}
    (fp_line (start 3 1.75) (end -3 1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 1.75) (end -3 1.5) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start 3 1.5) (end 3 1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start 3 -1.75) (end 3 -1.5) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 -1.5) (end -3 -1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 -1.75) (end 3 -1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 1.75) (end 3 1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 -1.75) (end -3 -1.5) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 1.75) (end -3 1.5) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start -3 -1.75) (end 3 -1.75) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start 3 -1.75) (end 3 -1.5) (layer "${p.param.side}.SilkS") (width 0.15))
    (fp_line (start 3 1.75) (end 3 1.5) (layer "${p.param.side}.SilkS") (width 0.15))

    ${'' /* pins */}
    (pad "1" thru_hole circle locked (at 3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers ${p.param.side}.Cu ${p.param.side}.Mask "${p.param.side}.SilkS") ${p.net.from.str})
    (pad "2" thru_hole circle locked (at -3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers ${p.param.side}.Cu ${p.param.side}.Mask "${p.param.side}.SilkS") ${p.net.from.str})
  )
    
    `
}
