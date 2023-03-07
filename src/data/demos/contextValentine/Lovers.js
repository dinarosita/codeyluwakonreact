import React, { useContext } from 'react'
import { ValContext } from './ValentineApp'

export default function Lovers() {
    const valStatus = useContext(ValContext)
    const sayItem = valStatus? '"I love you"' : "nothing"
  return (
    <span>
      The boy says {sayItem} to the girl.
    </span>
  )
}
