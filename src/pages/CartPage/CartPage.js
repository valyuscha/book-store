import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderLayout} from 'layouts'
import {purchase, showConfirmClearCartModal} from 'store'
import {CartItem, ConfirmClearCartModal, PurchaseModal} from 'components'
import {Button, Loader} from 'components/UI'

import {
  CartImg,
  CartItemsWrapper,
  CartPageContent,
  EmptyCartBlockWrapper,
  EmptyCartMessage,
  EmptyTrashButtonWrapper,
  EmptyTrashTotalCountPriceWrapper,
  PurchaseButtonWrapper,
  TotalCountPrice,
  TotalCountPriceWrapper
} from './style'

const CartPage = () => {
  const dispatch = useDispatch()
  const {addedBooks, totalCount, totalPrice, isLoading} = useSelector(({cart}) => cart)

  const addedBooksToCartArr = Object.entries(addedBooks).map(book => {
    book[1].id = book[0]
    return book[1]
  })

  return (
    <HeaderLayout>
      {!isLoading ? (
        <CartPageContent>
          {addedBooksToCartArr.length ? (
            <>
              <PurchaseButtonWrapper>
                <Button
                  btnType="purple"
                  onClick={() => dispatch(purchase(addedBooksToCartArr))}>
                  Purchase
                </Button>
              </PurchaseButtonWrapper>
              <CartItemsWrapper>
                {addedBooksToCartArr.map(book => {
                  return (
                    <CartItem
                      key={book.id}
                      allBooks={addedBooksToCartArr}
                      book={book} />
                  )
                })}
              </CartItemsWrapper>
              <EmptyTrashTotalCountPriceWrapper>
                <EmptyTrashButtonWrapper>
                  <Button
                    btnType="purple"
                    onClick={() => dispatch(showConfirmClearCartModal())}>
                    Empty Trash
                  </Button>
                </EmptyTrashButtonWrapper>
                <TotalCountPriceWrapper>
                  <TotalCountPrice>Total count: {totalCount}</TotalCountPrice>
                  <TotalCountPrice>Total price: {totalPrice}$</TotalCountPrice>
                </TotalCountPriceWrapper>
              </EmptyTrashTotalCountPriceWrapper>
              <ConfirmClearCartModal />
            </>
          ) : (
            <EmptyCartBlockWrapper>
              <CartImg fill="#464646" />
              <EmptyCartMessage>Cart empty...</EmptyCartMessage>
            </EmptyCartBlockWrapper>
          )}
        </CartPageContent>
      ) : <Loader />}
      <PurchaseModal />
    </HeaderLayout>
  )
}

export default CartPage