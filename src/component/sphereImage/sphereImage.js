import React from 'react'
import { SphereImageContainer } from './style'


export default function SphereImage({image, height= "100%", width= "100%"}) {
  return (
    <SphereImageContainer src={image} height={height} width={width} />
  )
}
