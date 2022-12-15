import React, { FunctionComponent } from 'react';

// Custom Components
import { HorizontalContainer } from 'components/Containers';
import { SmallText } from 'components/Texts';
import Widget from './Widget';

// Helper
import { formatDateTime, formatScore } from '../lib/helper';

import { BottomWidgetsProps } from './types';

import { colors } from 'components/colors';

const BottomWidgets: FunctionComponent<BottomWidgetsProps> = ({
  author,
  score,
  time
 }) => {
  const { danger, gray, warning} = colors;
  return (
    <HorizontalContainer style={{ justifyContent: 'space-between', marginTop: 16 }}>
      <HorizontalContainer>
        <Widget color={warning} icon='star'>
          <SmallText>{formatScore(score)}</SmallText>
        </Widget>
        <Widget color={danger} icon='heart'>
          <SmallText>{formatScore(author.karma)}</SmallText>
        </Widget>
      </HorizontalContainer>

      <Widget color={gray} icon='time-outline'>
        <SmallText style={{ color: gray }}>{formatDateTime(time)}</SmallText>
      </Widget>
    </HorizontalContainer>
  );
};

export default BottomWidgets;