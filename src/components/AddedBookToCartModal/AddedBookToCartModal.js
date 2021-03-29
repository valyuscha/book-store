import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {hideAddedToCartBookModal} from 'store'
import {Modal, Button} from 'components/UI'

import {Message} from './style'

const AddedBookToCartModal = () => {
  const dispatch = useDispatch()
  const {isAddedBookToCartModalVisible} = useSelector(({modals}) => modals)

  useEffect(() => {
    if (isAddedBookToCartModalVisible) {
      const hideModalTimeout = setTimeout(() => {
        dispatch(hideAddedToCartBookModal())
      }, 5000)

      return () => clearTimeout(hideModalTimeout)
    }
  }, [isAddedBookToCartModalVisible])

  return (
    <Modal show={isAddedBookToCartModalVisible}>
      <Message>Book was successfully added to cart</Message>
      <Button onClick={() => dispatch(hideAddedToCartBookModal())}>
        Close
      </Button>
    </Modal>
  )
}

export default AddedBookToCartModal