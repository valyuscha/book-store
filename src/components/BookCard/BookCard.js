import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'components/UI'

import {
  BookAuthor,
  BookCover,
  BookName,
  CardContentWrapper,
  CardWrapper,
  Price,
  PriceViewWrapper,
  ViewButtonWrapper
} from './style'

const BookCard = ({book}) => {
  const history = useHistory()

  return (
    <CardWrapper>
      <CardContentWrapper>
        <BookCover bookCover={book.cover} />
        <BookName>{book.title}</BookName>
        <BookAuthor>{book.author}</BookAuthor>
        <PriceViewWrapper>
          <Price>{book.price}$</Price>
          <ViewButtonWrapper>
            <Button onClick={() => history.push(`/catalog/${book.id}`)}>
              View
            </Button>
          </ViewButtonWrapper>
        </PriceViewWrapper>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default BookCard