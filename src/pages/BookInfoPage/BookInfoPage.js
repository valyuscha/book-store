import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Ellipsis} from 'react-awesome-spinners'
import {useLocation} from 'react-router-dom'
import {HeaderLayout} from 'layouts'
import {getCurrentBookInfo} from 'store'
import {BookPriceCountInfo} from 'components'
import {getCookie} from 'utils'

import {
  BookInfoWrapper,
  BookTitle,
  BookInfoPageWrapper,
  BookInfoContent,
  LoaderWrapper,
  BookInfoPartWrapper,
  BookCoverAuthorLevelWrapper,
  BookCover,
  Author,
  Level,
  TagsDescriptionWrapper,
  Description,
  DescriptionLabel,
  Tags,
  BookPriceCountInfoWrapper,
  BookMiniInfoPart,
  BookMiniInfoWrapper
} from './style'

const BookInfoPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathName = location.pathname
  const bookId = pathName.slice(9)
  const token = getCookie('token')

  const {currentBookInfo, isLoading} = useSelector(({books}) => books)

  useEffect(() => {
    dispatch(getCurrentBookInfo(bookId, token))
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
    <BookInfoPageWrapper>
      {!isLoading && !isCurrentBookEmpty ? (
        <HeaderLayout>
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
        </HeaderLayout>
      ) : (
        <LoaderWrapper>
          <Ellipsis color="#fff" />
        </LoaderWrapper>
      )}
    </BookInfoPageWrapper>
  )
}

export default BookInfoPage