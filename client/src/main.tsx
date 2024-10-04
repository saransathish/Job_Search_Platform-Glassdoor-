import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo-client.ts';
import { ApolloProvider } from '@apollo/client';

import { createRoutesFromChildren, matchRoutes, Routes, useLocation, useNavigationType } from 'react-router-dom';
import { createReactRouterV6Options, getWebInstrumentations, initializeFaro, ReactIntegration, ReactRouterVersion } from '@grafana/faro-react';

initializeFaro({
  url: 'https://faro-collector-prod-au-southeast-1.grafana.net/collect/6b658835e372147dfc4e56d894a8b496',
  app: {
    name: 'job search platform',
    version: '1.0.0',
    environment: 'production'
  },
  
  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    // new TracingInstrumentation(),

    // React integration for React applications.
     new ReactIntegration({
      router: createReactRouterV6Options({
        createRoutesFromChildren,
        matchRoutes,
        Routes,
        useLocation,
        useNavigationType,
      }),
    }),
  ],
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>
)
