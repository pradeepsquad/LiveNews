import _ from 'lodash';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

// custom Components
import { MainContainer } from 'components/Containers';
import { colors } from 'components/colors';


// types
import { RootStackParamList } from 'src/navigators/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'News'>;

const NewsScreen: FC<Props> = ({ route }) => {
  const uri: string = _.get(route?.params, 'uri');

  const renderLoading = () => {
    return (
      <MainContainer>
        <ActivityIndicator color={colors.accent} size={'large'} />
      </MainContainer>
    )
  };

  return (
    <WebView
      renderLoading={renderLoading}
      startInLoadingState={true}
      style={{ backgroundColor: colors.grayLight, flex: 1 }}
      source={{ uri }}
      useWebKit={true}
    />
  );
};

export default NewsScreen;