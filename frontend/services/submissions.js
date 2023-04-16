import axios from 'axios';
import { API_URL } from '../constants';

const URL = `${API_URL}/submissions`;

export const getAllSubmissions = async () => {
  try {
    const { data } = await axios.get( URL );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getSubmissionsByTag = async (tag) => {
  try {
    const { data } = await axios.get(`${URL}/tag/${tag}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};