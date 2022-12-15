import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { ContainerProps } from './types';

import { colors } from '../colors';
const { grayLight } = colors;

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${grayLight};
  flex: 1;
  padding: 16px;
`;



export const MainContainerCenter: FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledView style={props.style}>{props.children}</StyledView>
  );
};

export default MainContainerCenter;