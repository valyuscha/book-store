import styled from 'styled-components'

export const FiltersSectionWrapper = styled.div`
  position: relative;
`

export const OpenCloseFiltersWrapper = styled.div`
  display: inline-flex;
  margin-bottom: 15px;
  cursor: pointer;  

  @media screen and (min-width: 401px) {
    display: none;
  }
`

export const FiltersTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`

export const OpenCloseFiltersButton = styled.button`
  background: none;
  border: none;
  height: 12px;
  position: relative;
  top: 3px;
  cursor: pointer;
`

export const OpenCloseFiltersIcon = styled.img`
  width: 12px;
  transform: ${p => p.areFiltersVisible ? 'rotate(0)' : 'rotate(-90deg)'};
  transition: transform 1s;
`

export const FiltersWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 30px;

  @media screen and (max-width: 710px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center; 
    max-height: ${p => p.areFiltersVisible ? '500px' : 0};
    transition: max-height 1s ease-in-out;
  }
`

export const FilterFieldWrapper = styled.div`
  width: 47%;
  max-width: 300px;
  
  &:first-of-type {
    margin-right: 20px;
  }

  @media screen and (max-width: 710px) {
    &:first-of-type {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 400px) {
    width: 90vw;
    max-width: 90vw;

    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`