import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {errorIcon, hideErrorMessage} from 'assets'
import {hideResponseErrorMessage} from 'store'

import {
  ErrorIcon,
  ErrorMessageWrapper,
  HideMessageButton,
  HideMessageIcon,
  Message,
  MessageWrapper
} from './style'

const ErrorBoundary = (Component) => {
  return () => {
    const dispatch = useDispatch()
    const {isResponseErrorMessageVisible} = useSelector(({serverCommunication}) => {
      return serverCommunication
    })

    // useEffect(() => {
    //   let closeMessageTimeOut
    //   if (isResponseErrorMessageVisible) {
    //     closeMessageTimeOut = setTimeout(() => {
    //       dispatch(hideResponseErrorMessage())
    //     }, 10000)
    //   }
    //
    //   return () => {
    //     if (isResponseErrorMessageVisible) {
    //       clearTimeout(closeMessageTimeOut)
    //     }
    //   }
    // }, [isResponseErrorMessageVisible])

    return (
      <>
        <Component />
        <ErrorMessageWrapper show={isResponseErrorMessageVisible}>
          <MessageWrapper>
            <ErrorIcon src={errorIcon} />
            <Message>
              Ooooops. Something went wrong. Try again a little bit later.
            </Message>
          </MessageWrapper>
          <HideMessageButton onClick={() => dispatch(hideResponseErrorMessage())}>
            <HideMessageIcon src={hideErrorMessage} />
          </HideMessageButton>
        </ErrorMessageWrapper>
      </>
    )
  }
}

export default ErrorBoundary