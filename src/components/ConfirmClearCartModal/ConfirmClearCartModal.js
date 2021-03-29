import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {hideConfirmClearCartModal, clearCart} from 'store'
import {Button, Modal} from 'components/UI'

import {Message, ButtonsWrapper, ButtonWrapper} from './style'

const ConfirmClearCartModal = () => {
  const dispatch = useDispatch()
  const {isConfirmClearCartModalVisible} = useSelector(({modals}) => modals)

  const clearCartHandler = () => {
    dispatch(clearCart())
    dispatch(hideConfirmClearCartModal())
  }

  return (
    <Modal show={isConfirmClearCartModalVisible}>
      <Message>Do you really want to clear the cart?</Message>
      <ButtonsWrapper>
        <ButtonWrapper>
          <Button onClick={() => dispatch(hideConfirmClearCartModal())}>
            No
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={clearCartHandler}>
            Yes
          </Button>
        </ButtonWrapper>
      </ButtonsWrapper>
    </Modal>
  )
}

export default ConfirmClearCartModal