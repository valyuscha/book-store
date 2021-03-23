import React from 'react'
import {useDispatch} from 'react-redux'
import {showConfirmLogoutModal} from 'store'
import {cartIcon, logoutIcon} from 'assets'

import {
  CartImg,
  CartWrapper,
  Header,
  HeaderWrapper,
  Logo,
  LogoutButton,
  LogoutImg,
  LogoWrapper,
  ProfileLogoutCartWrapper,
  ProfileLogoutWrapper,
  PurchasesAmount,
  PurchasesAmountWrapper,
  UserAvatar,
  UserName
} from './style'

const BooksCatalogHeader = () => {
  const dispatch = useDispatch()
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  return (
    <HeaderWrapper>
      <Header>
        <LogoWrapper>
          <Logo>JS Band Store</Logo>
        </LogoWrapper>
        <ProfileLogoutCartWrapper>
          <ProfileLogoutWrapper>
            <LogoutButton onClick={() => dispatch(showConfirmLogoutModal())}>
              <LogoutImg src={logoutIcon} />
            </LogoutButton>
            <UserName>{activeUser.name}</UserName>
            <UserAvatar src={activeUser.avatar} />
          </ProfileLogoutWrapper>
          <CartWrapper>
            <CartImg src={cartIcon} />
            <PurchasesAmountWrapper>
              <PurchasesAmount>9+</PurchasesAmount>
            </PurchasesAmountWrapper>
          </CartWrapper>
        </ProfileLogoutCartWrapper>
      </Header>
    </HeaderWrapper>
  )
}

export default BooksCatalogHeader