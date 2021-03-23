import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Ellipsis} from 'react-awesome-spinners'
import {getAllBooks} from 'store'
import {ErrorBoundary} from 'hoc'
import {getCookie} from 'utils'

import {
  ConfirmLogoutModal,
  BooksCatalogHeader,
  BooksCatalogFilters,
  BookCard
} from 'components'

import {bookIcon} from '../../assets'

import {
  MainContentWrapper,
  MiniScreensLogo,
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
  
  return (
    <BooksCatalogPageWrapper>
      {!isLoading ? (
        <>
          <BooksCatalogHeader />
          <ConfirmLogoutModal />
          <MainContentWrapper>
            <MiniScreensLogo>JS Band Store</MiniScreensLogo>
            <BooksCatalogFilters
              booksForRender={booksForRender}
              filterBooksFnc={setBooksForRender} />
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
        </>
      ) : (
        <LoaderWrapper>
          <Ellipsis color="#fff" />
        </LoaderWrapper>
      )}
    </BooksCatalogPageWrapper>
  )
}

export default ErrorBoundary(BooksCatalogPage)