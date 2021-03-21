import React from 'react'
import {Button} from '../UI'

import {Message, ButtonsWrapper, ButtonWrapper} from './style'

const ConfirmLogoutModal = () => {
  return (
    <>
      <Message>Do you really want to logout?</Message>
      <ButtonsWrapper>
        <ButtonWrapper>
          <Button>No</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>Yes</Button>
        </ButtonWrapper>
      </ButtonsWrapper>
    </>
  )
}

export default ConfirmLogoutModal