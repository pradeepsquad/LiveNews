import React, { FC, useEffect } from 'react';
import { useReduxDispatch, useReduxSelector } from '../app/store';

// custom components

import { MainContainer, MainContainerCenter } from '../components/Containers';
import { RegularText } from 'components/Texts';


import Randomizer from 'randomizer/randomizer';
import { getStories, newsSelector } from 'randomizer/randomizerSlice';

// types
import { RootStackParamList } from 'src/navigators/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = () => {
  const dispatch = useReduxDispatch();
  const news = useReduxSelector(newsSelector);

  console.log(news);

  useEffect(() => {
    dispatch(getStories());
  },[]);

  if (news.error) {
    return (
      <MainContainerCenter>
        <RegularText>Something went wrong.</RegularText>
      </MainContainerCenter>
    );
  }

  return (
    <MainContainer>
      <Randomizer />
    </MainContainer>
  );
};

export default Home;