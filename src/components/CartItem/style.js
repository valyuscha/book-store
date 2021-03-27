import styled from 'styled-components'
import {colors} from 'assets'
import {Link} from 'react-router-dom'

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.black};
  background: ${colors.section};
  padding: 10px;
  
  ${p => p.allBooks.length > 1 ? `
    &:first-of-type {
      border-radius: 5px 5px 0 0;
    }
    
    &:last-of-type {
      border-radius: 0 0 5px 5px;
    }
  ` : 'border-radius: 5px'};

  &:last-of-type {
    border: none;
  }
`

export const CartItemTitle = styled(Link)`
  max-width: 60%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  color: ${colors.black};
  font-weight: 700;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 650px) {
    max-width: 50%;
  }

  @media screen and (max-width: 649px) {
    font-size: 14px;
  }

  @media screen and (max-width: 550px) {
    width: 40%;
  }
`

export const CounterTotalPriceDeleteBookWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 1150px) {
    width: 25%;
  }

  @media screen and (max-width: 900px) {
    width: 30%;
  }

  @media screen and (max-width: 750px) {
    width: 35%;
  }

  @media screen and (max-width: 650px) {
    width: 40%;
  }

  @media screen and (max-width: 550px) {
    width: 50%;
  }

  @media screen and (max-width: 450px) {
    width: 55%;
  }
`

export const BooksCounterWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 450px) {
    width: 80px;
  }

  @media screen and (max-width: 350px) {
    width: 65px;
  }
`

export const IncreaseDecreaseButton = styled.button`
  background: ${p => !p.canIncreaseBooksCount && !p.canDecreaseBooksCount ? colors.black : colors.global};
  border: none;
  cursor: ${p => !p.canIncreaseBooksCount && !p.canDecreaseBooksCount ? 'not-allowed' : 'pointer'};
  height: 22px;
  width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 350px) {
    width: 18px;
    height: 18px;
  }
`

export const IncreaseDecreaseIcon = styled.img`
  width: 12px;
`

export const BooksCount = styled.p`
  font-size: 16px;
  margin: 0 5px;
  font-weight: 600;

  @media screen and (max-width: 649px) {
    font-size: 14px;
  }
`

export const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 649px) {
    font-size: 14px;
  }
`

export const TrashButton = styled.button`
  background: none;
  border: none;
  height: 20px;
  cursor: pointer;
`

export const TrashIcon = styled.img`
  width: 18px;

  @media screen and (max-width: 350px) {
    width: 15px;
  }
`