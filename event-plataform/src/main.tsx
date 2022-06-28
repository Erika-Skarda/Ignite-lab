import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// CMS = Content Managenebt System
// Headless CMS Painel de ADMIN (dados fornecidos através de uma API REST ou GraplQL)

// React que consome API do CMS