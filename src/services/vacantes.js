
import Axios from 'axios'
const getVacantes= async () => {
  try {
    const response = await Axios.get(`https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return null;
};

export const serviceVacantes = {
  getVacantes
};
