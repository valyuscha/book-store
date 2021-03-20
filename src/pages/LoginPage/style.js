import styled from 'styled-components'
import {colors} from 'assets'

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginBlockWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  background: ${colors.section};
  padding: 20px;
  border-radius: 15px;
  box-sizing: border-box;
`

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  
  @media screen and (max-width: 468px) {
    font-size: 24px;
  }
  
  @media screen and (max-width: 384px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 327px) {
    font-size: 19px;
  }
`

export const Form = styled.form``

export const SubmitButtonWrapper = styled.div`
  margin-top: 20px;
`