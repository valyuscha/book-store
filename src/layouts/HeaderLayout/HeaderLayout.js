import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {showConfirmLogoutModal} from 'store'
import {ConfirmLogoutModal} from 'components'
import {cartIcon, logoutIcon} from 'assets'

import {
  MiniScreensLogo,
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

const HeaderLayout = ({children}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  return (
    <>
      <HeaderWrapper>
        <Header>
          <LogoWrapper>
            <Logo onClick={() => history.push('/catalog')}>
              JS Band Store
            </Logo>
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
      <MiniScreensLogo onClick={() => history.push('/catalog')}>
        JS Band Store
      </MiniScreensLogo>
      <ConfirmLogoutModal />
      {children}
    </>
  )
}

export default HeaderLayout