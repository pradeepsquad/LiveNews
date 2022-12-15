import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { ContainerProps } from './types';

const StyledView = styled.View`
  flex-direction: row;
`;

const HorizontalContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledView style={props.style}>{props.children}</StyledView>
  );
};

export default HorizontalContainer;