const {Configuration , OpenAIApi} = require('openai');
const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
    res.send('Welcome to the Coding Nexus API')
})

app.post('/message', (req, res) => {
    const response = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.prompt,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });

    response.then((data) => {
        const message = {message: data.data.choices[0].text};
        console.log('Error does not occur');
        res.send(message);
    }).catch((err) => {
        console.log('error occured');
        res.send(err.message);
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));