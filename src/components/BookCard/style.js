import styled from 'styled-components'
import {colors} from 'assets'

export const CardWrapper = styled.div`
  width: 33.33%;
  padding: 0 10px;
  box-sizing: border-box;
  
  @media screen and (max-width: 730px) {
    width: 50%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`

export const CardContentWrapper = styled.div`
  padding: 15px;
  background: ${colors.cardBack};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${colors.white};
  margin-bottom: 20px;
`

export const BookCover = styled.div`
  height: 240px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 13px 12px -8px rgba(34, 60, 80, .5);
  margin-bottom: 15px;
  background: ${p => `url("${p.bookCover}") no-repeat 50% 50%/cover`};
  
  @media screen and (max-width: 730px) {
    height: calc(50vw - 90px);
  }

  @media screen and (max-width: 400px) {
    height: 240px;
  }
`

export const BookName = styled.h3`
  font-size: 16px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  margin-bottom: 15px;
`

export const BookAuthor = styled.h4`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`

export const PriceViewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
`

export const ViewButtonWrapper = styled.div``