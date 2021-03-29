import React from 'react'

import {ModalContentWrapper, ModalWrapper} from './style'

const Modal = ({children, show}) => (
  <ModalWrapper show={show}>
    <ModalContentWrapper>
      {children}
    </ModalContentWrapper>
  </ModalWrapper>
)

export default Modal