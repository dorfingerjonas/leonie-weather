const fetch = require('node-fetch');
const config = require('./config.json');
const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://leonie.htl-leonding.ac.at");

client.on("connect", options => {
    client.subscribe(`${config.token}/weather`, err => {
        if (err) {
            console.error(err);
        }
    });

    console.log("Connected successfully");
});

client.on("message", async (topic, message) => {
    await getWeather(JSON.parse(message.toString("utf-8")).city);
});

async function getWeather(city) {
    const api = require('./weatherapi.json');
    const url = `${api.url}?q=${city || api.city}&appid=${api.apiKey}&units=${api.units}`;

    const response = await fetch(url);
    return await response.json();
}
