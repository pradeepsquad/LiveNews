import React, { FC } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

// custom components
import { colors } from 'components/colors';
import RandomizerItem from './randomizerItem';
import ListFooter from './components/ListFooter';

import { ListProps, Story } from './types';

const RandomizerList: FC<ListProps> = ({
  data,
  isLoading,
  onRefresh,
}) => {
  const keyExtractor = (item: Story, index: number) => `${item.id}-${index}`;

  const renderItem: ListRenderItem<Story> = ({ item }) => (
    <RandomizerItem item={item} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      ListFooterComponent={() => <ListFooter />}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          colors={[colors.accent]}
          onRefresh={onRefresh}
          refreshing={isLoading}
          tintColor={colors.secondary}
        />
      }
      showsVerticalScrollIndicator={false}
      style={{ paddingBottom: 16, paddingTop: 16 }}
    />
  );
};

export default RandomizerList;