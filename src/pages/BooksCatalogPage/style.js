import styled from 'styled-components'
import {colors} from 'assets'

export const BooksCatalogPageWrapper = styled.div`
  background: ${colors.global};
`

export const MainContentWrapper = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto 15px;

  @media screen and (min-width: 650px) {
    padding-top: 90px;
  }
`

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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