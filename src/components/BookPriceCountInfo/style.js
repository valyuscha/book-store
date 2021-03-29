import styled from 'styled-components'
import {colors} from 'assets'

export const BookPriceCountInfoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px;
  background: ${colors.section};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
`

export const InfoPartWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const InfoLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export const InfoValue = styled.p`
  font-size: 16px;
`

export const AddToCartButtonWrapper = styled.div`
  width: fit-content;
  margin-top: 25px;
`

export const CountValue = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`

export const Count = styled.p`
  font-size: 16px;
  margin: 0 10px;
`

export const IncreaseDecreaseButton = styled.button`
  background: ${p => !p.canIncreaseBooksAmount && !p.canDecreaseBooksAmount ? colors.black : colors.global};
  border: none;
  cursor: ${p => !p.canIncreaseBooksAmount && !p.canDecreaseBooksAmount ? 'not-allowed' : 'pointer'};
  height: 22px;
  width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IncreaseDecreaseIcon = styled.img`
  width: 12px;
`