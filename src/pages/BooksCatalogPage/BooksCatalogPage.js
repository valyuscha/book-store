import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {ErrorBoundary} from 'hoc'
import {HeaderLayout} from 'layouts'
import {BookCard, BooksCatalogFilters} from 'components'
import {bookIcon} from 'assets'
import {Loader} from 'components/UI'

import {
  BookImg,
  BooksWrapper,
  MainContentWrapper,
  NoBookMessage,
  NoBooksWrapper
} from './style'

const BooksCatalogPage = () => {
  const {allBooks, isLoading} = useSelector(({books}) => books)
  const [booksForRender, setBooksForRender] = useState([])

  useEffect(() => {
    setBooksForRender(allBooks)
  }, [allBooks])

  return (
    <HeaderLayout>
      {!isLoading ? (
        <MainContentWrapper>
          <BooksCatalogFilters filterBooksFnc={setBooksForRender} />
          {booksForRender.length ? (
            <BooksWrapper>
              {booksForRender.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </BooksWrapper>
          ) : (
            <NoBooksWrapper>
              <BookImg src={bookIcon} />
              <NoBookMessage>No books</NoBookMessage>
            </NoBooksWrapper>
          )}
        </MainContentWrapper>
      ) : <Loader />}
    </HeaderLayout>
  )
}

export default ErrorBoundary(BooksCatalogPage)