import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const key = process.env.OPENAI_API_KEY;
console.log("key", key);

const configuration = new Configuration({
    apiKey: key,
});

export const openai = new OpenAIApi(configuration);

const askChatGPT = async (req, res) => {
    console.log(req);
    const text = req.body.chat;
    const completion = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: text,
    });
    console.log(completion);
    return completion.data.choices[0].text;
};

const chatGptController = {
    askChatGPT,
};

export default chatGptController;