import styled from 'styled-components'
import {colors} from 'assets'

export const Label = styled.label`
  display: block;
  font-size: 15px;
  margin: 0 0 10px 5px;
  color: ${colors.black};
  font-weight: 600;
`

export const SelectElem = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid ${colors.black};
  font-size: 14px;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${colors.white};
`

export const Option = styled.option``