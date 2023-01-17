## Weatherbit API Test (Node, Express, TS, Redis, Docker)
It works like a proxy that fetches Weatherbit. Returns seven daily forecast for a given city. 
It returns a minimalistic response with min/max/avg temp and date.
It uses Typescript and Express.JS framework.
It caches the response in Redis that runs in Docker with an expiration time of 1min that can be modified from .env file.

`GET: /forecast/daily?city=Arad&country=RO`

## Dependencies
- Node.JS (I've used v14.2)
- NPM
- Docker
- Weatherbit API KEY

## Start commands
- create `.env` file based on the same structure as `.env.dev`
- `npm run init-start`
