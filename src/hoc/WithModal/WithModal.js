import React from 'react'
import {Modal} from 'components/UI'

const WithModal = (Component, content, show) => {
  return () => (
    <>
      <Component />
      <Modal show={show}>
        {content}
      </Modal>
    </>
  )
}

export default WithModal