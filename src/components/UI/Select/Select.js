import React, {Children} from 'react'

import {Label, SelectElem, Option} from './style'

const Select = (props) => (
  <>
    <Label>{props.label}</Label>
    <SelectElem
      value={props.value}
      onChange={props.onChange}>
      {Children.toArray(props.optionsArr.map(option => <Option>{option}</Option>))}
    </SelectElem>
  </>
)

export default Select