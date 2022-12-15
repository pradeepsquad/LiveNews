import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'app/rootReducer';
import { News, StoryID, Story } from './types';

import { API_BASE_URL as BASE_URL } from 'constants/config';

const initialState: News = {
  error: null,
  randomStories: [],
  status: 'idle',
  stories: [],
}

export const getStories = createAsyncThunk(
  'stories/fetch',
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/v0/topstories.json`)
      return data;
    } catch (error) {
      console.log('getStories catched error', error);
    }
  }
);

export const getStory = createAsyncThunk<Story, StoryID>(
  'story/fetch',
  async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/v0/item/${id}.json`);
      const { data: author } = await axios.get(`${BASE_URL}/v0/user/${data.by}.json`);
      return {...data, author};
    } catch (error) {
      console.log('getStory catched error', error);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getting all stories
    builder
    .addCase(getStories.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(getStories.fulfilled, (state, {payload }: PayloadAction<StoryID[]>) => {
      state.error = null;
      state.status = 'idle';
      state.stories = payload;
      state.randomStories = [];
    })
    .addCase(getStories.rejected, (state, action) => {
      if (action.error) {
        state.error = action.error.message || 'Something went wrong'
      }
      state.status = 'idle';
      state.randomStories = [];
    })
    // getting single story
    .addCase(getStory.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(getStory.fulfilled, (state: News, { payload }: PayloadAction<Story>) => {
      state.error = null;
      state.status = 'idle';
      state.randomStories.push(...[payload]);
    })
    .addCase(getStory.rejected, (state, action) => {
      if (action.error) {
        state.error = action.error.message
      }
      state.status = 'idle';
    });
  },
});

export const newsSelector = (state: RootState) => state.news;
export const randomStoriesSelector = (state: RootState) => state.news.randomStories;
export const statusSelector = (state: RootState) => state.news.status;
export const storiesSelector = (state: RootState) => state.news.stories;

export default newsSlice.reducer;
