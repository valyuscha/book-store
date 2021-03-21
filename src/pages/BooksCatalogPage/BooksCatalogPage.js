import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from 'store'
import {WithModal} from 'hoc'
import {ConfirmLogoutModal} from 'components'
import {cartIcon, logoutIcon} from 'assets'
import avatar from 'assets/images/avatar.jpg'

import {
  BooksCatalogPageWrapper,
  CartImg,
  CartWrapper,
  Header,
  HeaderWrapper,
  Logo,
  LogoutButton,
  LogoutImg,
  LogoWrapper,
  MainContentWrapper,
  MiniScreensLogo,
  ProfileLogoutCartWrapper,
  ProfileLogoutWrapper,
  PurchasesAmount,
  PurchasesAmountWrapper,
  UserAvatar,
  UserName
} from './style'

const BooksCatalogPage = () => {
  const dispatch = useDispatch()
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))
  console.log(activeUser)

  return (
    <BooksCatalogPageWrapper>
      <HeaderWrapper>
        <Header>
          <LogoWrapper>
            <Logo>JS Band Store</Logo>
          </LogoWrapper>
          <ProfileLogoutCartWrapper>
            <ProfileLogoutWrapper>
              <LogoutButton onClick={() => dispatch(logout())}>
                <LogoutImg src={logoutIcon} />
              </LogoutButton>
              <UserName>{activeUser.name}</UserName>
              <UserAvatar src={avatar} />
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
      <MainContentWrapper>
        <MiniScreensLogo>JS Band Store</MiniScreensLogo>
      </MainContentWrapper>
    </BooksCatalogPageWrapper>
  )
}

export default WithModal(BooksCatalogPage, <ConfirmLogoutModal />, true)