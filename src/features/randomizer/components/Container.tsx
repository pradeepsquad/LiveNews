import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { ContainerProps } from './types';

import { colors } from 'components/colors';
const { grayLight, white } = colors;

const StyledView = styled.View`
  background-color: ${white};
  border-color: ${grayLight};
  border-width: 1px;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 16px;
`;

const Container: FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledView style={props.style}>{props.children}</StyledView>
  );
};

export default Container;