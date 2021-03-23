import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Ellipsis} from 'react-awesome-spinners'
import {ErrorBoundary} from 'hoc'
import {Button, Input} from 'components/UI'
import {checkValidity} from 'utils'
import {auth} from 'store'
import {getUserNameErrorMessage} from './getUserNameErrorMessage'

import {
  Form,
  LoginBlockWrapper,
  LoginPageWrapper,
  SubmitButtonWrapper,
  Title
} from './style'

const LoginPage = () => {
  const dispatch = useDispatch()
  const {isLoading} = useSelector(({loader}) => loader)

  const [nameControl, setNameControl] = useState({
    value: '',
    isValid: false,
    isTouched: false,
    errorMessage: 'Enter the field',
    rules: {
      required: true,
      minLength: 4,
      maxLength: 16
    }
  })

  const getValidUserName = (event, isBlurHandler) => {
    const control = {...nameControl}

    control.value = event.target.value
    control.isValid = checkValidity(control.value, control.rules)
    control.errorMessage = getUserNameErrorMessage(control.value)

    if (isBlurHandler) {
      control.isTouched = true
    }

    setNameControl(control)
  }

  const changeHandler = (event) => {
    getValidUserName(event)
  }

  const blurHandler = (event) => {
    getValidUserName(event, true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const control = {...nameControl}
    control.isTouched = true

    if (control.isValid) {
      dispatch(auth(control.value))
    }

    setNameControl(control)
  }

  return (
    <LoginPageWrapper>
      {!isLoading ? (
        <LoginBlockWrapper>
          <Title>Welcome to JS Band Store</Title>
          <Form>
            <Input
              type="text"
              fieldType="login"
              label="Name"
              placeholder="John Adams"
              value={nameControl.value}
              isValid={nameControl.isValid}
              isTouched={nameControl.isTouched}
              errorMessage={nameControl.errorMessage}
              onChange={changeHandler}
              onBlur={blurHandler} />
            <SubmitButtonWrapper>
              <Button onClick={submitHandler}>Log in</Button>
            </SubmitButtonWrapper>
          </Form>
        </LoginBlockWrapper>
      ) : <Ellipsis color="#fff" />}
    </LoginPageWrapper>
  )
}

export default ErrorBoundary(LoginPage)