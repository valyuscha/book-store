import React from 'react'
import {Button} from 'components/UI'

import {
  BookCover,
  CardWrapper,
  CardContentWrapper,
  BookName,
  BookAuthor,
  PriceViewWrapper,
  Price,
  ViewButtonWrapper
} from './style'

const BookCard = ({book}) => {
  return (
    <CardWrapper>
      <CardContentWrapper>
        <BookCover bookCover={book.cover} />
        <BookName>{book.title}</BookName>
        <BookAuthor>{book.author}</BookAuthor>
        <PriceViewWrapper>
          <Price>{book.price}$</Price>
          <ViewButtonWrapper>
            <Button>View</Button>
          </ViewButtonWrapper>
        </PriceViewWrapper>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default BookCard