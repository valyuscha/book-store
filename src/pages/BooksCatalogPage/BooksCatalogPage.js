import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBooks, startLoading, stopLoading} from 'store'
import {ErrorBoundary} from 'hoc'
import {HeaderLayout} from 'layouts'
import {BookCard, BooksCatalogFilters} from 'components'
import {bookIcon} from 'assets'
import {Loader} from 'components/UI'

import {
  BookImg,
  BooksCatalogPageWrapper,
  BooksWrapper,
  MainContentWrapper,
  NoBookMessage,
  NoBooksWrapper
} from './style'

const BooksCatalogPage = () => {
  const dispatch = useDispatch()
  const {allBooks, isLoading} = useSelector(({books}) => books)
  const [booksForRender, setBooksForRender] = useState([])

  useEffect(() => {
    dispatch(startLoading())
    dispatch(getAllBooks())
  }, [])

  useEffect(() => {
    setBooksForRender(allBooks)
  }, [allBooks])

  useEffect(() => {
    if (booksForRender.length && isLoading) {
      dispatch(stopLoading())
    }
  }, [booksForRender, isLoading])

  return (
    <BooksCatalogPageWrapper>
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
    </BooksCatalogPageWrapper>
  )
}

export default ErrorBoundary(BooksCatalogPage)