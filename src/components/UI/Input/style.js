import styled from 'styled-components'
import {colors} from 'assets'

export const InputWrapper = styled.div``

export const Label = styled.label`
  display: block;
  font-size: 15px;
  margin: 0 0 10px 5px;
  color: ${p => !p.isValid && p.isTouched ? colors.red : colors.global};
`

export const Field = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px 15px;
  border: 2px solid ${p => !p.isValid && p.isTouched ? colors.red : colors.global};
  border-radius: 10px;
  box-sizing: border-box;
`

export const ErrorMessage = styled.p`
  font-size: 12px;  
  color: ${colors.red};
  margin: 5px 5px 0 0;
  text-align: right;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`