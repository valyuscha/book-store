import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addNewBookToCart} from 'store'
import {Button} from 'components/UI'
import {minusIcon, plusIcon} from 'assets'
import {countTotalPriceOfSameBooks} from 'utils'
import {getChangedBooksCount} from './getChangedBooksCount'
import {disableAddingNewBooksIfThereISNoCurrentBooks} from './disableAddingNewBooks'

import {
  AddToCartButtonWrapper,
  BookPriceCountInfoWrapper,
  Count,
  CountValue,
  IncreaseDecreaseButton,
  IncreaseDecreaseIcon,
  InfoLabel,
  InfoPartWrapper,
  InfoValue
} from './style'

const BookPriceCountInfo = () => {
  const dispatch = useDispatch()
  const {currentBookInfo} = useSelector(({books}) => books)
  const addedToCartBooks = useSelector(({cart}) => cart.addedBooks)
  const [totalPrice, setTotalPrice] = useState(0)
  const [booksCount, setBooksCount] = useState(1)
  const [canIncreaseBooksCount, setCanIncreaseBooksCount] = useState(true)
  const [canDecreaseBooksCount, setCanDecreaseBooksCount] = useState(false)

  useEffect(() => {
    disableAddingNewBooksIfThereISNoCurrentBooks(
      addedToCartBooks,
      currentBookInfo,
      setBooksCount,
      setCanIncreaseBooksCount,
      setTotalPrice
    )
  }, [currentBookInfo])

  const changeBooksAmountHandler = (action) => {
    const currentBookInCart = Object.entries(addedToCartBooks).filter(book => {
      if (book[0] === currentBookInfo.id) {
        return book
      }
    })

    const changedBooksCount = getChangedBooksCount(
      currentBookInCart,
      booksCount,
      currentBookInfo,
      setCanIncreaseBooksCount,
      action
    )

    if (changedBooksCount) {
      const changedTotalPrice = countTotalPriceOfSameBooks(
        currentBookInfo.price,
        changedBooksCount
      )

      setTotalPrice(changedTotalPrice)
    }

    if (changedBooksCount > 1) {
      setCanDecreaseBooksCount(true)
    } else if (changedBooksCount === 1) {
      setCanDecreaseBooksCount(false)
    }

    setBooksCount(changedBooksCount)
  }

  const addNewBookToCartHandler = () => {
    if (booksCount) {
      dispatch(addNewBookToCart(currentBookInfo, booksCount, totalPrice))
      setBooksCount(1)
      setCanDecreaseBooksCount(false)

      disableAddingNewBooksIfThereISNoCurrentBooks(
        addedToCartBooks,
        currentBookInfo,
        setBooksCount,
        setCanIncreaseBooksCount,
        setTotalPrice
      )
    }
  }

  return (
    <BookPriceCountInfoWrapper>
      <InfoPartWrapper>
        <InfoLabel>Price, $ </InfoLabel>
        <InfoValue>{currentBookInfo.price}</InfoValue>
      </InfoPartWrapper>
      <InfoPartWrapper>
        <InfoLabel>Count</InfoLabel>
        <CountValue>
          <IncreaseDecreaseButton
            canIncreaseBooksAmount={canIncreaseBooksCount}
            onClick={() => changeBooksAmountHandler('add')}>
            <IncreaseDecreaseIcon src={plusIcon} />
          </IncreaseDecreaseButton>
          <Count>{booksCount}</Count>
          <IncreaseDecreaseButton
            canDecreaseBooksAmount={canDecreaseBooksCount}
            onClick={() => changeBooksAmountHandler('remove')}>
            <IncreaseDecreaseIcon src={minusIcon} />
          </IncreaseDecreaseButton>
        </CountValue>
      </InfoPartWrapper>
      <InfoPartWrapper>
        <InfoLabel>Total price, $</InfoLabel>
        <InfoValue>{totalPrice}</InfoValue>
      </InfoPartWrapper>
      <AddToCartButtonWrapper>
        <Button onClick={addNewBookToCartHandler}>Add to Cart</Button>
      </AddToCartButtonWrapper>
    </BookPriceCountInfoWrapper>
  )
}

export default BookPriceCountInfo