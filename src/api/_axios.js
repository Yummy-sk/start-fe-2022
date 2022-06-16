import axios from 'axios';
const API_URL = ({ path }) => `/public/${path}.json`;

export async function _fetch({ path }) {
  try {
    const response = await axios.get(API_URL({ path }));

    return await response.data;
  } catch (e) {
    console.error(e.message);
  }
}
