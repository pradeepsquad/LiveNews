import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { TextProps } from './types';


// Custom components
import { colors } from '../colors';
const { textDark } = colors;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${textDark};
  text-align: left;
`;

const RegularText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText style={props.style}>{props.children}</StyledText>
  );
};

export default RegularText;