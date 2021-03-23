import styled from 'styled-components'
import {colors} from 'assets'

export const HeaderWrapper = styled.div`
  background: ${colors.purple};
  position: fixed;  
  top: 0; 
  left: 0;  
  right: 0; 
  z-index: 999;
`

export const Header = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`

export const LogoWrapper = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 649px) {
    display: none;
  }
`

export const Logo = styled.h1`
  color: ${colors.white};
  font-size: 36px;
`

export const ProfileLogoutCartWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 649px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const ProfileLogoutWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;  
`

export const LogoutImg = styled.img`
  width: 25px;  
  height: 25px; 
  margin-right: 15px;
`

export const UserName = styled.p`
  font-size: 16px;  
  color: ${colors.white};
`

export const UserAvatar = styled.img`
  width: 40px;  
  height: 40px; 
  border-radius: 50%;
  margin-left: 15px;  
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;  
`

export const CartImg = styled.img`
  width: 25px;  
  height: 25px; 
  margin-right: 10px;
  cursor: pointer;
`

export const PurchasesAmountWrapper = styled.div`
  width: 25px;  
  height: 25px;
  border-radius: 50%;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const PurchasesAmount = styled.span`
  font-size: 16px;
  color: ${colors.purple};
`