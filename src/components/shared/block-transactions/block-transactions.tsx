import React from "react"
import styled from "styled-components"
import BlockTransactionRow, {
  rowPaddingX,
} from "./block-transaction-row/block-transaction-row"
import { themeTone } from "@style/theme"
import { Web3BlockData } from "model"
import BlockTransactionCols from "./block-transaction-cols/block-transaction-cols"
import Label from "../label/label"
import { layout } from "@style/design-tokens"
import { toString } from "lodash"

interface Props {
  transactions: Web3BlockData["transactionsData"]
}

const BlockTransactions: React.FunctionComponent<Props> = ({
  transactions,
}) => {
  function renderBodyRows() {
    return transactions.map((trx, index) => {
      return (
        <DataRow
          key={index}
          blockNumber={toString(trx.blockNumber)}
          trxHash={trx.hash}
          from={trx.from}
          to={trx.to}
          value={trx.value}
        />
      )
    })
  }

  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <BlockTransactionCols
            tableHeader={true}
            block={<Heading>Block</Heading>}
            hash={<Heading>Hash</Heading>}
            fromTo={<Heading>From / To</Heading>}
            value={<Heading>Value</Heading>}
          />
        </TableHeadRow>
      </TableHead>
      <TableBody>{renderBodyRows()}</TableBody>
    </Table>
  )
}

const Heading: React.FunctionComponent = ({ children }) => (
  <Label intensity="low" size="lg">
    {children}
  </Label>
)

const Table = styled.table`
  background-color: ${themeTone(500)};
  display: block;
`

const TableHead = styled.thead`
  display: block;
  padding: ${layout.scale[5]} ${rowPaddingX};
  background-color: orange;
`

const TableHeadRow = styled.tr`
  display: flex;
`

const TableBody = styled.tbody`
  width: 100%;
  display: block;
`

const DataRow = styled(BlockTransactionRow)`
  margin-top: ${layout.scale[5]};
`

export default BlockTransactions
