import { ColumnContainer, ColumnTitle, CardContainer } from "./styles"
import { AddNewItem } from "./AddNewItem"

type ColumnProps = {
  text: string
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
      <CardContainer>Begin to use static typing</CardContainer>
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
