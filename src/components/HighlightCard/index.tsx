import React from 'react';

import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransation: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighlightCard({
  title,
  amount,
  lastTransation,
  type
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransation}</LastTransaction>
      </Footer>
    </Container>
  );
};