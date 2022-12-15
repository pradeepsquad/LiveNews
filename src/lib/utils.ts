import Constants from 'expo-constants';

// get extra setting from app.json
export const getExtraSetting = (key: string) => {
  const extra = Constants.manifest?.extra;
  return extra && extra[key];
};