import axios from 'axios';

export async function _axios({ path }) {
  try {
    const response = await axios.get(path);

    return await response.data;
  } catch (e) {
    console.error(e.message);
  }
}
