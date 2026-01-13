'use client'
import React, { ReactNode,FC } from 'react'
import { useRef ,ButtonHTMLAttributes} from 'react'


interface SoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  soundSrc?: string; // optionnel : permet de changer le son
}

type bottonProps={
    children:ReactNode
}
function Botton({children}:bottonProps) {
  return (
    <div>
        {children}
    </div>
  )
}

export default Botton