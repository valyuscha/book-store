import styled from 'styled-components'
import {colors} from 'assets'

export const BoughtCartItemWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
`

export const BookTitle = styled.p`
  width: 60%;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid ${colors.black};
  border-top: none;
  
  ${p => p.firstRow ? `
    text-align: center;
    background: ${colors.global};
    color: ${colors.white};
    border-top: 1px solid ${colors.black};
  ` : ''};
  
  @media screen and (max-width: 490px) {
    width: 50%;
  }
`

export const TotalCountPriceWrapper = styled.div`
  width: 40%;
  display: flex;

  @media screen and (max-width: 490px) {
    width: 50%;
  }
`

export const TotalCount = styled.p`
  padding: 5px;
  font-size: 13px;
  width: 50%;
  text-align: center;
  border: 1px solid ${colors.black};
  border-top: none;
  border-left: none;

  ${p => p.firstRow ? `
    background: ${colors.global};
    color: ${colors.white};
    border-top: 1px solid ${colors.black};
  ` : ''};
`

export const TotalPrice = styled.p`
  padding: 5px;
  font-size: 13px;
  width: 50%;
  text-align: center;
  border: 1px solid ${colors.black};
  border-top: none;
  border-left: none;

  ${p => p.firstRow ? `
    background: ${colors.global};
    color: ${colors.white};
    border-top: 1px solid ${colors.black};
  ` : ''};
`