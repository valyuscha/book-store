import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import {showConfirmLogoutModal} from 'store'
import {ConfirmLogoutModal} from 'components'
import {logoutIcon} from 'assets'

import {
  CartImg,
  CartWrapper,
  Header,
  HeaderWrapper,
  Logo,
  LogoutButton,
  LogoutImg,
  LogoWrapper,
  MiniScreensLogo,
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
  const location = useLocation()
  const {totalCount} = useSelector(({cart}) => cart)
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  const goToCartPageHandler = (event) => {
    if (location.pathname !== '/cart') {
      const {tagName} = event.target

      if (
        tagName.toLowerCase() === 'svg'
        || tagName.toLowerCase() === 'path'
        || tagName.toLowerCase() === 'span'
      ) {
        history.push('/cart')
      }
    }
  }

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
            <CartWrapper onClick={goToCartPageHandler}>
              <CartImg fill="#fff" />
              <PurchasesAmountWrapper>
                <PurchasesAmount>
                  {totalCount > 9 ? '9+' : totalCount}
                </PurchasesAmount>
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