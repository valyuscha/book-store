import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Input, Select} from 'components/UI'
import {angleDownIcon} from 'assets'
import {filterBooksByPrice} from './filterBooksByPrice'
import {filterBooksByName} from './filterBooksByName'

import {
  FiltersSectionWrapper,
  FiltersWrapper,
  FilterFieldWrapper,
  OpenCloseFiltersWrapper,
  FiltersTitle,
  OpenCloseFiltersButton,
  OpenCloseFiltersIcon
} from './style'

const BooksCatalogFilters = ({filterBooksFnc}) => {
  const [areFiltersVisible, setAreFiltersVisible] = useState(() => {
    return window.innerWidth > 400
  })

  const {allBooks} = useSelector(({books}) => books)

  const [controls, setControls] = useState({
    search: {
      value: ''
    },
    priceSelect: {
      value: 'No filters'
    }
  })

  const priceFilterOptions = [
    'No filters',
    '0 < price < 25',
    '25 < price < 50',
    'price > 50'
  ]

  const showHideFiltersHandler = () => {
    setAreFiltersVisible(prev => !prev)
  }

  const searchChangeHandler = async (event) => {
    const fields = {...controls}
    fields.search.value = event.target.value

    const filteredBooksByPrice = filterBooksByPrice(
      fields.priceSelect.value,
      allBooks
    )

    const filterBooksByNameArr = filterBooksByName(
      fields.search.value,
      filteredBooksByPrice
    )
    filterBooksFnc(filterBooksByNameArr)

    setControls(fields)
  }

  const priceSelectChangeHandler = (event) => {
    const fields = {...controls}
    fields.priceSelect.value = event.target.value

    const filteredBooksByName = filterBooksByName(
      fields.search.value,
      allBooks
    )

    const filterBooksByPriceArr = filterBooksByPrice(
      fields.priceSelect.value,
      filteredBooksByName
    )
    filterBooksFnc(filterBooksByPriceArr)

    setControls(fields)
  }

  return (
    <FiltersSectionWrapper>
      <OpenCloseFiltersWrapper
        areFiltersVisible={areFiltersVisible}
        onClick={showHideFiltersHandler}>
        <FiltersTitle>Filters</FiltersTitle>
        <OpenCloseFiltersButton>
          <OpenCloseFiltersIcon
            src={angleDownIcon}
            areFiltersVisible={areFiltersVisible} />
        </OpenCloseFiltersButton>
      </OpenCloseFiltersWrapper>
      <FiltersWrapper areFiltersVisible={areFiltersVisible}>
        <FilterFieldWrapper>
          <Input
            type="text"
            fieldType="search"
            label="Search by name"
            placeholder="book name"
            value={controls.search.value}
            onChange={searchChangeHandler} />
        </FilterFieldWrapper>
        <FilterFieldWrapper>
          <Select
            value={controls.priceSelect.value}
            label="Filter by price"
            optionsArr={priceFilterOptions}
            onChange={priceSelectChangeHandler} />
        </FilterFieldWrapper>
      </FiltersWrapper>
    </FiltersSectionWrapper>
  )
}

export default BooksCatalogFilters