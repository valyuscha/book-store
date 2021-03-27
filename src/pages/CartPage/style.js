import styled from 'styled-components'
import {ReactComponent as CartIcon} from 'assets/images/cartIcon.svg'

export const CartPageWrapper = styled.div``

export const EmptyCartBlockWrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`

export const CartImg = styled(CartIcon)`
  width: 40px;
`

export const EmptyCartMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
`

export const CartPageContent = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto 15px;

  @media screen and (min-width: 650px) {
    padding-top: 110px;
  }
`

export const PurchaseButtonWrapper = styled.div`
  width: fit-content;
  margin-left: calc(100% - 110.88px);
  
  @media screen and (max-width: 385px) {
    margin-left: calc(100% - 100.77px);
  }
`

export const CartItemsWrapper = styled.div`
  margin-top: 40px;
`

export const TotalCountPriceWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`

export const TotalCountPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 15px;
  
  &:first-of-type {
    margin-left: 0;
  }
  
  @media screen and (max-width: 649px) {
    font-size: 14px;
  }
`