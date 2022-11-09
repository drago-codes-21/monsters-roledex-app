import axios from "axios";
export const BASE_URL = "https://random-user.p.rapidapi.com/getuser";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "8850818c60msh02f2c2c75fe3ffcp1c6fafjsnc80b69e7bb17",
    "X-RapidAPI-Host": "random-user.p.rapidapi.com",
  },
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);

  return data;
};
/*const options = {
    method: 'GET',
    url: 'https://random-user.p.rapidapi.com/getuser',
    headers: {
      'X-RapidAPI-Key': '8850818c60msh02f2c2c75fe3ffcp1c6fafjsnc80b69e7bb17',
      'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
    }
  };
  */
