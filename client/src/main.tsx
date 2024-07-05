import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo-client.ts';
import { ApolloProvider } from '@apollo/client';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>
)
