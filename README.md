This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Get unique API key from https://pro.coinmarketcap.com/account
## Setup backend
1. navigate to backend folder. 
2. Make a .env file in the backend. and create a key COINMARKET_API_KEY=your_key
3. run backend server by using command 
        node server.js

***********

## Architechture
1. Have used module federation in css since I was recently working on that
2. Have used Next.js because it's highly recommended for it's versatality. Next.js projects perform better than create-react-app. For future scalability we can easily utilise this architechture.
3. Used Express and node for the backend as the coinmarketcap api doesn't allow direct http requests to protect users api_key. Also for the future when I require to hit two apis internally, it will be helpful.





