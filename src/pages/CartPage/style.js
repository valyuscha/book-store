import styled from 'styled-components'
import {ReactComponent as CartIcon} from 'assets/images/cartIcon.svg'

export const CartPageWrapper = styled.div`
  height: calc(100vh - 79px);
  overflow: auto;
  position: absolute;
  width: 100%;
  bottom: 0;

  @media screen and (max-width: 650px) {
    height: calc(100vh - 70px);
  }
`

export const EmptyCartBlockWrapper = styled.div`
  margin-top: 110px;
  text-align: center;
  
  @media screen and (max-width: 649px) {
    margin-top: 70px;
  }
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
    padding-top: 30px;
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

export const EmptyTrashTotalCountPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  
  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

export const EmptyTrashButtonWrapper = styled.div`
  width: fit-content;

  @media screen and (max-width: 450px) {
    margin-top: 15px;
  }
`

export const TotalCountPriceWrapper = styled.div`
  display: flex;
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