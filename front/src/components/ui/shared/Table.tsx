import React from 'react'
import styled from '@emotion/styled'
import Box from './Box'

interface TableProps {}

const TableContent = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  th {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  td {
    color: ${(props) => props.theme.colors.text};
  }
  th,
  td {
    text-align: center;
    font-weight: normal;
    border: 1px solid #d9e0e6;
    padding: 0.5em 1em;
  }
`

function Table(props: TableProps) {
  return (
    <Box overflow="auto">
      <TableContent {...props} />
    </Box>
  )
}

export default Table
