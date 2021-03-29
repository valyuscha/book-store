import React from 'react'

import {
  BookTitle,
  BoughtCartItemWrapper,
  TotalCount,
  TotalCountPriceWrapper,
  TotalPrice
} from './style'

const BoughtCartItem = ({book, firstRow}) => (
  <BoughtCartItemWrapper>
    <BookTitle firstRow={firstRow}>
      {firstRow ? 'Title' : book.title}
    </BookTitle>
    <TotalCountPriceWrapper>
      <TotalCount firstRow={firstRow}>
        {firstRow ? 'Count' : book.addedCount}
      </TotalCount>
      <TotalPrice firstRow={firstRow}>
        {firstRow ? 'Total' : book.currentBookTotalPrice}
      </TotalPrice>
    </TotalCountPriceWrapper>
  </BoughtCartItemWrapper>
)

export default BoughtCartItem