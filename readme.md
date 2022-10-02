# Node Typescript template

## contains:
1. express dotenv
2. typescript @types/express @types/node
3. concurrently nodemon

## run with:
```
> npm i
> npm run dev
```


### instructions
```

npm init -y
npm i -P express dotenv
npm i -D typescript @types/express @types/node
npm i -D concurrently nodemon
npx tsc --init


mkdir src
cd src
touch index.js
cd ..



```
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env?.PORT ?? 300;

app.get('/', (req: Request, res: Response) => {
  res.send('⚡️ Express + TypeScript Server - Status 200.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
```


package.json
```
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}

```


```
