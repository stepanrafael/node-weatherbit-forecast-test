###### Practical Exercise
It works like a proxy that fetches Weatherbit. Returns seven daily forecast for a given city. 
It returns a minimalistic response with min_temp, max_temp and date.
It uses Typescript and Express.JS framework.
It caches the response in Redis that runs in Docker with an expiration time of 5min that can be modified from .env file.

`ENDPOINT: /stats?city=Arad&country=RO`

###### Dependencies
- Node.JS (I've used v14.2)
- NPM
- Docker
- Ask for Weatherbit API KEY

###### Start commands
- create `.env` file based on the same structure as `.env.dev`, with your custom settings
- `npm run init-start`
