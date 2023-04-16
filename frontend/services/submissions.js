import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const getSubmissionsByTag = async (tag, id) => {
  try {
    const { data } = await axios.get(`${URL}/tag/${tag}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};