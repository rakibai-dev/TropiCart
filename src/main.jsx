import * as Sentry from "@sentry/react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

Sentry.init({
  dsn: "https://bd324b13d0aa4b7c0e83bf28d5340009@o4511163523596288.ingest.us.sentry.io/4511163821588480",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>
)
