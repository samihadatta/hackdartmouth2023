import axios from 'axios';
import { API_URL } from '../constants';

const URL = `${API_URL}/geojson`;

export const getGeoJSON = async () => {
  try {
    const { data } = await axios.get( URL );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};