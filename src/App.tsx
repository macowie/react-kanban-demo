import React from 'react';
import logo from './logo.svg';

import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer
} from "./styles"

import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  )
}
