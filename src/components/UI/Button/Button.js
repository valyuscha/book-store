import React from 'react'

import {ButtonElem} from './style'

const Button = (props) => (
  <ButtonElem onClick={props.onClick}>
    {props.children}
  </ButtonElem>
)

export default Button