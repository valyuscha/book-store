import styled from 'styled-components'
import {colors} from 'assets'

export const BooksCatalogPageWrapper = styled.div`
  height: calc(100vh - 79px);
  overflow: auto;
  position: absolute;
  width: 100%;
  bottom: 0;

  @media screen and (max-width: 650px) {
    height: calc(100vh - 70px);
  }
`

export const MainContentWrapper = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto 15px;

  @media screen and (min-width: 650px) {
    padding-top: 20px;
  }
`

export const BooksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const NoBooksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const BookImg = styled.img`
  width: 40px;
`

export const NoBookMessage = styled.p`
  font-size: 16px;
  margin-top: 10px;
`