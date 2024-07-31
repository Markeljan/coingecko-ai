Here's the modified version as a Bitte AI Plugin for a CoinGecko price assistant:

# CoinGecko Price Assistant Plugin

![CoinGecko Logo](https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png)

# CoinGecko Price Assistant API

This API provides an interface for retrieving the latest price data and chart information on cryptocurrency tokens using CoinGecko's data.

## API Base URL

https://api.coingecko.com/api/v3

## Endpoints

1. Get Token Price
   GET /simple/price?ids={id}&vs_currencies={currency}

2. Get Token Chart Data
   GET /coins/{id}/market_chart?vs_currency={currency}&days={days}

3. Get Token Metadata
   GET /coins/{id}

## Usage

Make LLM requests to the endpoints above. Refer to the full API documentation for detailed parameter and response information.

## Development

1. Set `COINGECKO_API_KEY=your_api_key` environment variable
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

navigate to `http://localhost:3000/docs` to view the API documentation.