import React, { FC } from 'react';

// custom components
import { MainContainerCenter } from 'components/Containers';
import { SmallText } from 'components/Texts';
import { colors } from 'components/colors';

const ListFooter: FC = () => {
  return (
    <MainContainerCenter style={{ marginBottom: 16 }}>
        <SmallText style={{color: colors.textLight}}>You've reached the end of list</SmallText>
      </MainContainerCenter>
  );
};

export default ListFooter;