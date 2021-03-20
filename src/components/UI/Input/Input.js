import React from 'react'

import {InputWrapper, Label, Field, ErrorMessage} from './style'

const Input = (props) => (
  <InputWrapper>
    <Label
      isValid={props.isValid}
      isTouched={props.isTouched}>
      {props.label}
    </Label>
    <Field
      type={props.type}
      value={props.value}
      isValid={props.isValid}
      isTouched={props.isTouched}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur} />
    <ErrorMessage
      isValid={props.isValid}
      isTouched={props.isTouched}>
      {props.errorMessage}
    </ErrorMessage>
  </InputWrapper>
)

export default Input