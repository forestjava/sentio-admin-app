# sentio-web-frontend

Frontend Web App for Sentio CX project

### Technologies
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- and others in `package.json`

<br>

## Installation
```console
npm install
```

<br>

## Configuration
```console
cp .env.example .env
```

Read more about [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)  

> ⚡ The backend API server route which will be used in this app is defined in `VITE_BACKEND_API_ROUTE` environment variable.  

<br>

## Run in development mode 
(with hot code reload)
```console
npm run dev
```  

<br>

## Build production bundle for deploy 
(to **./dist** folder)
```console
npm run build
```

<br>

## Serve production bundle with Node.js (Vite) 
(any other HTTP server can be used)
```console
npm run serve
```
