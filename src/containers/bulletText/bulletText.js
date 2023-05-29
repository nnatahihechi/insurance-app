import React from 'react'
import { BulletTextContainer } from './style'
import Asterisks from '../../icons/asterisks'

export default function BulletText({children, className, side}) {
  return (
    <BulletTextContainer side={side} className={className}>
     <Asterisks/>
      {children}
    </BulletTextContainer>
  )
}
