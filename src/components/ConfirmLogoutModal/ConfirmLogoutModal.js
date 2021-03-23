import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Modal, Button} from 'components/UI'
import {hideConfirmLogoutModal, logout, hideResponseErrorMessage} from 'store'

import {Message, ButtonsWrapper, ButtonWrapper} from './style'

const ConfirmLogoutModal = () => {
  const dispatch = useDispatch()
  const {isConfirmLogoutModalVisible} = useSelector(({modals}) => modals)

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(hideResponseErrorMessage())
    dispatch(hideConfirmLogoutModal())
  }

  return (
    <Modal show={isConfirmLogoutModalVisible}>
      <Message>Do you really want to logout?</Message>
      <ButtonsWrapper>
        <ButtonWrapper onClick={() => dispatch(hideConfirmLogoutModal())}>
          <Button>No</Button>
        </ButtonWrapper>
        <ButtonWrapper onClick={logoutHandler}>
          <Button>Yes</Button>
        </ButtonWrapper>
      </ButtonsWrapper>
    </Modal>
  )
}

export default ConfirmLogoutModal