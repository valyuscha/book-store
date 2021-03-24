import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Button} from 'components/UI'
import {plusIcon, minusIcon} from 'assets'
import {chooseBooksAmount, countTotalPriceOfSameBooks} from 'utils'

import {
  BookPriceCountInfoWrapper,
  InfoPartWrapper,
  InfoLabel,
  InfoValue,
  AddToCartButtonWrapper,
  CountValue,
  Count,
  IncreaseDecreaseButton,
  IncreaseDecreaseIcon
} from './style'

const BookPriceCountInfo = () => {
  const {currentBookInfo} = useSelector(({books}) => books)
  const [totalPrice, setTotalPrice] = useState(currentBookInfo.price)
  const [booksCount, setBooksCount] = useState(1)
  const [canIncreaseBooksAmount, setCanIncreaseBooksAmount] = useState(true)
  const [canDecreaseBooksAmount, setCanDecreaseBooksAmount] = useState(false)

  const changeBooksCountHandler = (action) => {
    const changedBooksAmount = chooseBooksAmount(
      booksCount,
      currentBookInfo.count,
      action
    )

    const changedTotalPrice = countTotalPriceOfSameBooks(
      currentBookInfo.price,
      changedBooksAmount
    )

    setTotalPrice(changedTotalPrice)

    if (changedBooksAmount === currentBookInfo.count) {
      setCanIncreaseBooksAmount(false)
    } else if (changedBooksAmount < currentBookInfo.count) {
      setCanIncreaseBooksAmount(true)
    }

    if (changedBooksAmount > 1) {
      setCanDecreaseBooksAmount(true)
    } else if (changedBooksAmount === 1) {
      setCanDecreaseBooksAmount(false)
    }

    setBooksCount(changedBooksAmount)
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
            canIncreaseBooksAmount={canIncreaseBooksAmount}
            onClick={() => changeBooksCountHandler('add')}>
            <IncreaseDecreaseIcon src={plusIcon} />
          </IncreaseDecreaseButton>
          <Count>{booksCount}</Count>
          <IncreaseDecreaseButton
            canDecreaseBooksAmount={canDecreaseBooksAmount}
            onClick={() => changeBooksCountHandler('remove')}>
            <IncreaseDecreaseIcon src={minusIcon} />
          </IncreaseDecreaseButton>
        </CountValue>
      </InfoPartWrapper>
      <InfoPartWrapper>
        <InfoLabel>Total price, $</InfoLabel>
        <InfoValue>{totalPrice}</InfoValue>
      </InfoPartWrapper>
      <AddToCartButtonWrapper>
        <Button>Add to Cart</Button>
      </AddToCartButtonWrapper>
    </BookPriceCountInfoWrapper>
  )
}

export default BookPriceCountInfo