import React, { ChangeEvent } from 'react'
import Input from '../shared/Input'
import Box from '../shared/Box'

function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value)
  }

  return (
    <Box>
      <Input onChange={onChange} placeholder="Search bundles.." type="search" />
    </Box>
  )
}

export default SearchBox
