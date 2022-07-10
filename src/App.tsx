import React from 'react';
import logo from './logo.svg';

import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer
} from "./styles"

import { Column } from "./Column"

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
    </AppContainer>
  )
}
