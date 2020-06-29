# Leonie-Weather

``MQTT`` weather client for [@htblaleonie](https://github.com/htblaleonie/).

### How to use it

At first you need to create your own [OpenWeather](https://openweathermap.org/) api-key and copy the key into `weatherapi.json`.

The ``MQTT`` client is connected to ``mqtt://leonie.htl-leonding.ac.at`` and subscribes to ``/t/weather``.

You can change the token in the ``config.json`` file. When you call the ``getWeather()`` function you need to provide a city as a param. In case you don't provide a city, *Leonding* is set as default.

### For developers

```
npm install
npm start
```



<hr>
Copyright © 2020, Jonas Dorfinger. This application is [MIT licensed](./LICENSE)