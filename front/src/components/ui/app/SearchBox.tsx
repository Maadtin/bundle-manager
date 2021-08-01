import React, { ChangeEvent } from 'react'
import styled from '@emotion/styled'
import Input from '../shared/Input'
import Box from '../shared/Box'

const SearchBoxContainer = styled(Box)`
  width: 160px;
  @media (min-width: 600px) {
    width: auto;
  }
`

function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value)
  }

  return (
    <SearchBoxContainer>
      <Input onChange={onChange} placeholder="Search bundles.." type="search" />
    </SearchBoxContainer>
  )
}

export default SearchBox
