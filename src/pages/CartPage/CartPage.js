import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {HeaderLayout} from 'layouts'
import {purchase} from 'store'
import {CartItem} from 'components'
import {getCookie} from 'utils'
import {Button} from 'components/UI'

import {
  CartPageWrapper,
  EmptyCartBlockWrapper,
  CartImg,
  EmptyCartMessage,
  CartPageContent,
  PurchaseButtonWrapper,
  CartItemsWrapper,
  TotalCountPriceWrapper,
  TotalCountPrice
} from './style'

const CartPage = () => {
  const dispatch = useDispatch()
  const {addedBooks, totalCount, totalPrice} = useSelector(({cart}) => cart)
  const token = getCookie('token')

  const addedBooksToCartArr = Object.entries(addedBooks).map(book => {
    book[1].id = book[0]
    return book[1]
  })

  return (
    <CartPageWrapper>
      <HeaderLayout>
        {addedBooksToCartArr.length ? (
          <CartPageContent>
            <PurchaseButtonWrapper>
              <Button
                btnType="purple"
                onClick={() => dispatch(purchase(addedBooksToCartArr, token))}>
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
            <TotalCountPriceWrapper>
              <TotalCountPrice>Total count: {totalCount}</TotalCountPrice>
              <TotalCountPrice>Total price: {totalPrice}$</TotalCountPrice>
            </TotalCountPriceWrapper>
          </CartPageContent>
        ) : (
          <EmptyCartBlockWrapper>
            <CartImg fill="#464646" />
            <EmptyCartMessage>Cart empty...</EmptyCartMessage>
          </EmptyCartBlockWrapper>
        )}
      </HeaderLayout>
    </CartPageWrapper>
  )
}

export default CartPage