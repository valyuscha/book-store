import styled from 'styled-components'
import {colors} from 'assets'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  display: ${({show}) => show ? 'block' : 'none'};
  z-index: 9999;
`

export const ModalContentWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: ${colors.section};
  border-radius: 10px;
  width: 80%;
  max-width: 350px;
  max-height: 80vh;
  overflow: auto;
`