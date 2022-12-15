import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { WidgetProps } from './types';

const StyledView = styled.View`
  flex-direction: row;
  text-align: left;
  margin-right: 12px;
`;

const Widget: FunctionComponent<WidgetProps> = ({
  children,
  color,
  icon,
  style
}) => {
  return (
    <StyledView style={style}>
      <Ionicons
        color={color}
        name={icon}
        size={16}
        style={{ marginRight: 4 }}
      />
      {children}
    </StyledView>
  );
};

export default Widget;