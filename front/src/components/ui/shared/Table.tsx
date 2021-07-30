import styled from '@emotion/styled'

interface TableProps {}

const Table = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #d9e0e6;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: 0.5em 1em;
  }
`

export default Table
