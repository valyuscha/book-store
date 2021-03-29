import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {HeaderLayout} from 'layouts'
import {getCurrentBookInfo} from 'store'
import {AddedBookToCartModal, BookPriceCountInfo} from 'components'
import {Loader} from 'components/UI'

import {
  Author,
  BookCover,
  BookCoverAuthorLevelWrapper,
  BookInfoContent,
  BookInfoPartWrapper,
  BookInfoWrapper,
  BookMiniInfoPart,
  BookMiniInfoWrapper,
  BookPriceCountInfoWrapper,
  BookTitle,
  Description,
  DescriptionLabel,
  Level,
  Tags,
  TagsDescriptionWrapper
} from './style'

const BookInfoPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathName = location.pathname
  const bookId = pathName.slice(9)

  const {currentBookInfo, isLoading} = useSelector(({books}) => books)

  useEffect(() => {
    dispatch(getCurrentBookInfo(bookId))
  }, [])

  const isCurrentBookEmpty = Object.keys(currentBookInfo).length === 0

  const BooksAuthorLevel = () => {
    if (!isLoading && !isCurrentBookEmpty) {
      return (
        <>
          <Author>
            <DescriptionLabel>Author:</DescriptionLabel> {currentBookInfo.author}
          </Author>
          <Level>
            <DescriptionLabel>Level:</DescriptionLabel> {currentBookInfo.level}
          </Level>
        </>
      )
    }
  }

  const TagsDescription = () => {
    if (!isLoading && !isCurrentBookEmpty) {
      return (
        <TagsDescriptionWrapper>
          <Tags>
            <DescriptionLabel>Tags:</DescriptionLabel>
            {currentBookInfo.tags.join(', ')}
          </Tags>
          <Description>
            <DescriptionLabel>Description:</DescriptionLabel>
            {currentBookInfo.description}
          </Description>
        </TagsDescriptionWrapper>
      )
    }
  }

  return (
    <HeaderLayout>
      {!isLoading && !isCurrentBookEmpty ? (
        <>
          <BookInfoWrapper>
            <BookTitle>{currentBookInfo.title}</BookTitle>
            <BookInfoContent>
              <BookInfoPartWrapper>
                <BookCoverAuthorLevelWrapper>
                  <BookCover cover={currentBookInfo.cover} />
                  <BooksAuthorLevel />
                </BookCoverAuthorLevelWrapper>
                <TagsDescription />
              </BookInfoPartWrapper>
              <BookMiniInfoPart>
                <BookCover cover={currentBookInfo.cover} />
                <BookMiniInfoWrapper>
                  <BooksAuthorLevel />
                  <TagsDescription />
                </BookMiniInfoWrapper>
              </BookMiniInfoPart>
              <BookPriceCountInfoWrapper>
                <BookPriceCountInfo />
              </BookPriceCountInfoWrapper>
            </BookInfoContent>
          </BookInfoWrapper>
          <AddedBookToCartModal />
        </>
      ) : <Loader />}
    </HeaderLayout>
  )
}

export default BookInfoPage