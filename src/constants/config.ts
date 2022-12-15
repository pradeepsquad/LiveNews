import { getExtraSetting } from 'lib/utils';

/**
 * API Server can be found in extra section of app.json
 */
 export const API_BASE_URL = getExtraSetting('apiUrl');