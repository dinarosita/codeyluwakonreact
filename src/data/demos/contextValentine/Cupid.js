import React, { useContext } from 'react'
import { ValContext } from './ValentineApp'

export default function Cupid() {
    const valStatus = useContext(ValContext)
    const shotItem = valStatus ? "love arrow" : "nothing"
  return (
    <span>
      Cupid shots {shotItem}.
    </span>
  )
}
