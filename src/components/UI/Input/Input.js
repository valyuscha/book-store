import React from 'react'
import {searchIcon} from 'assets'

import {InputWrapper, Label, Field, ErrorMessage, SearchIcon} from './style'

const Input = (props) => (
  <InputWrapper>
    <Label
      fieldType={props.fieldType}
      isValid={props.isValid}
      isTouched={props.isTouched}>
      {props.label}
    </Label>
    <Field
      type={props.type}
      fieldType={props.fieldType}
      value={props.value}
      isValid={props.isValid}
      isTouched={props.isTouched}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur} />
    <SearchIcon
      src={searchIcon}
      fieldType={props.fieldType} />
    <ErrorMessage
      isValid={props.isValid}
      isTouched={props.isTouched}>
      {props.errorMessage}
    </ErrorMessage>
  </InputWrapper>
)

export default Input