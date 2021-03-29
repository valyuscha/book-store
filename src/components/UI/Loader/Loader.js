import React from 'react'
import {Ellipsis} from 'react-awesome-spinners'
import {LoaderWrapper} from './style'

const Loader = () => (
  <LoaderWrapper>
    <Ellipsis color="#fff" />
  </LoaderWrapper>
)

export default Loader