import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Components
import { RegularText, SmallText } from 'components/Texts';
import BottomWidgets from './components/BottomWidgets';
import Container from './components/Container';

// types
import { Story } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigators/RootStack';

import { colors } from 'components/colors';
const { textLight } = colors;
interface RandomizerItemProps {
  item: Story
}

const RandomizerItem: FunctionComponent<RandomizerItemProps> = ({ item }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {
    if (item.url)
      navigation.navigate('News', { uri: item.url })
    else
      alert('This news item has broken url');
  }

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Container>
        <RegularText style={{ marginBottom: 4 }}>{item.title}</RegularText>
        <SmallText style={{ color: textLight, marginBottom: 16 }}>Author: {item.by}</SmallText>
        <SmallText style={{ color: textLight }}>{item.url || 'No URL found'}</SmallText>

        <BottomWidgets
          author={item.author}
          score={item.score}
          time={item.time}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default RandomizerItem;