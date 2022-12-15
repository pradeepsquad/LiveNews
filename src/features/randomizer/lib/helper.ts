import _ from 'lodash';
import moment from 'moment';
import { StoryID } from '../types';

export const randomizer = (stories: StoryID[]) => {
  const shuffledArray = _.shuffle(stories);
  return _.slice(shuffledArray, 0,10);
};

export const formatDateTime = (date: number, format = 'llll') =>
  moment.unix(date).format(format);

export const formatScore = (score: number) => score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");