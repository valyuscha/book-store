import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {hidePurchaseModal, clearCart, clearPurchaseMessage} from 'store'
import {BoughtCartItem} from 'components'
import {Modal, Button} from 'components/UI'

import {Message, PurchaseList, TotalPrice} from './style'

const PurchaseModal = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {addedBooks, totalPrice, purchaseMessage} = useSelector(({cart}) => cart)
  const {isPurchaseModalVisible} = useSelector(({modals}) => modals)

  const addedBooksToCartArr = Object.entries(addedBooks).map(book => {
    book[1].id = book[0]
    return book[1]
  })

  const finishPurchaseHandler = () => {
    dispatch(hidePurchaseModal())
    history.push('/catalog')
    dispatch(clearCart())
    dispatch(clearPurchaseMessage())
  }

  if (purchaseMessage) {
    return (
      <Modal show={isPurchaseModalVisible}>
        <Message>{purchaseMessage}</Message>
        <PurchaseList>
          <BoughtCartItem firstRow />
          {addedBooksToCartArr.map(book => {
            return (
              <BoughtCartItem
                key={book.id}
                book={book}
                allBooks={addedBooksToCartArr} />
            )
          })}
        </PurchaseList>
        <TotalPrice>Total price: {totalPrice}$</TotalPrice>
        <Button onClick={finishPurchaseHandler}>
          Close
        </Button>
      </Modal>
    )
  } else {
    return <div />
  }
}

export default PurchaseModal