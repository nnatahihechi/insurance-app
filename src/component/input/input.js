import React from 'react'
import { InputContainer } from './style'

export default function Input({type, suffixIcon: Icon, className, placeholder}) {

  return (
    <InputContainer className={className}>
        <input type={type} placeholder={placeholder} />
        {Icon && <Icon size="30px" /> }
    </InputContainer>
  )
}
