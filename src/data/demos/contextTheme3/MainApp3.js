import React from 'react'
import ChildComponent3 from './ChildComponent3'
import { ThemeProvider3 } from './ThemeContext3'

export default function MainApp3() {
  return (
    <ThemeProvider3>
        <ChildComponent3 />
    </ThemeProvider3>
  )
}
