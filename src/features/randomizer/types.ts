export interface Author {
  id: string;
  karma: number;
}

export interface Story {
  author: Author;
  by: string;
  descendants: number;
  kids: number[];
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface StoryID {
  stories: number[];
}

export interface News {
  error?: string | null;
  randomStories: Story[],
  status: 'loading' | 'idle';
  stories: StoryID[];
}

export interface ListProps {
  data: Array<Story>;
  isLoading: boolean;
  onRefresh: () => void;
}