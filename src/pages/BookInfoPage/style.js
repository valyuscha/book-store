import styled from 'styled-components'

export const BookInfoWrapper = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto 15px;

  @media screen and (min-width: 650px) {
    padding-top: 90px;
  }
`

export const BookTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  max-height: 90px;
  overflow: auto;

  @media screen and (max-width: 649px) {
    font-size: 24px;
  }
`

export const BookInfoPageWrapper = styled.div``

export const BookInfoContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 599px) {
    flex-direction: column;
  }
`

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const BookInfoPartWrapper = styled.div`
  width: 47%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }

  @media screen and (max-width: 599px) {
    display: none;
  }
`

export const BookCoverAuthorLevelWrapper = styled.div`
  width: 48%;

  @media screen and (max-width: 990px) {
    width: 100%;
  }
`

export const BookCover = styled.div`
  width: 100%;
  height: 300px;
  background: ${p => `url("${p.cover}") no-repeat 50% 50%/cover`};

  @media screen and (max-width: 990px) {
    width: 70%;
  }

  @media screen and (max-width: 690px) {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    width: 48%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`

export const Author = styled.p`
  font-size: 16px;
  margin-top: 15px;
  font-weight: 600;
  max-height: 70px;
  overflow: auto;

  @media screen and (max-width: 599px) {
    margin-top: 0;
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`

export const Level = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
`

export const TagsDescriptionWrapper = styled.div`
  width: 48%;

  @media screen and (max-width: 990px) {
    width: 100%;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 600;
  max-height: 400px;
  overflow: auto;
  margin-top: 10px;
`

export const DescriptionLabel = styled.span`
  font-weight: 800;
  margin-right: 5px;
`

export const Tags = styled.p`
  font-size: 14px;
  font-weight: 600;
  
  @media screen and (max-width: 990px) {
    margin-top: 10px;
  }
`

export const BookPriceCountInfoWrapper = styled.div`
  width: 47%;

  @media screen and (max-width: 599px) {
    margin: 30px auto;
    width: 100%;
    max-width: 400px;
  }
`

export const BookMiniInfoPart = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (min-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const BookMiniInfoWrapper = styled.div`
  width: 48%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`