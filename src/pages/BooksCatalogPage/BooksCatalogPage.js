import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Ellipsis} from 'react-awesome-spinners'
import {getAllBooks, finishGettingBooksInfo} from 'store'
import {ErrorBoundary} from 'hoc'
import {getCookie} from 'utils'
import {HeaderLayout} from 'layouts'
import {BooksCatalogFilters, BookCard} from 'components'
import {bookIcon} from 'assets'

import {
  MainContentWrapper,
  BooksCatalogPageWrapper,
  LoaderWrapper,
  BooksWrapper,
  NoBooksWrapper,
  BookImg,
  NoBookMessage
} from './style'

const BooksCatalogPage = () => {
  const dispatch = useDispatch()
  const {allBooks, isLoading} = useSelector(({books}) => books)
  const [booksForRender, setBooksForRender] = useState([])
  const token = getCookie('token')

  useEffect(() => {
    dispatch(getAllBooks(token))
  }, [])

  useEffect(() => {
    setBooksForRender(allBooks)
  }, [allBooks])

  useEffect(() => {
    if (booksForRender.length && isLoading) {
      dispatch(finishGettingBooksInfo())
    }
  }, [booksForRender, isLoading])
  
  return (
    <BooksCatalogPageWrapper>
      {!isLoading ? (
        <HeaderLayout>
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
        </HeaderLayout>
      ) : (
        <LoaderWrapper>
          <Ellipsis color="#fff" />
        </LoaderWrapper>
      )}
    </BooksCatalogPageWrapper>
  )
}

export default ErrorBoundary(BooksCatalogPage)