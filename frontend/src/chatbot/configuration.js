import { Configuration, OpenAIApi } from 'openai';

const key = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: key,
});

export const openai = new OpenAIApi(configuration);

const makeRequest = async (req) => {
  const completion = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt: req,
  });
  return completion.data.choices[0].text;
};

export default makeRequest;
// import axios from 'axios';

// const openaiEndpoint = 'https://api.openai.com/v1/completions';
// const headers = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
// };

// const makeRequest = async (req) => {
//   const data = {
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: req }],
//   };
//   const completion = await axios.post(openaiEndpoint, data, { headers });

//   return completion.data.choices[0].text;
// };

// export default makeRequest;
