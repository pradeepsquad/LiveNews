import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

// redux
import { useReduxDispatch, useReduxSelector } from '../../app/store';
import { getStories, randomStoriesSelector, statusSelector, storiesSelector } from './randomizerSlice';
import { getStory } from './randomizerSlice';

// types
import { Story, StoryID } from './types';

// Custom Components
import RandomizerList from './randomizerList';
import { colors } from 'components/colors';
import { MainContainerCenter } from 'components/Containers';

// helper
import { randomizer } from './lib/helper';

const Randomizer: FC = () => {
  const dispatch = useReduxDispatch();
  const randomStories = useReduxSelector(randomStoriesSelector);
  const status = useReduxSelector(statusSelector);
  const stories = useReduxSelector(storiesSelector);

  const [data, setData] = useState<Array<Story>>([]);

  useEffect(() => {
    if (!_.isEmpty(stories) && !_.isUndefined(stories)) {
      const shuffledStories = randomizer(stories.slice(0,500));

      if (shuffledStories)
        shuffledStories.forEach((id: StoryID) => dispatch(getStory(id)));
    }
  }, [stories]);

  useEffect(() => {
    if (randomStories) {
      const sortedArray: Array<Story> = _.sortBy(randomStories, 'score');
      setData(sortedArray)
    }
  }, [randomStories]);

  const isLoading = status === 'loading';

  if (isLoading) {
    return (
      <MainContainerCenter>
        <ActivityIndicator color={colors.accent} size={'large'} />
      </MainContainerCenter>
    )
  }

  const handleOnRefresh = () => dispatch(getStories());

  return (
    <RandomizerList
      data={data}
      isLoading={isLoading}
      onRefresh={handleOnRefresh}
    />
  );
};

export default Randomizer;