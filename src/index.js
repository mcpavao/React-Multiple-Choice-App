import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'


import Header from './Header'
import Footer from './Footer'

import './index.css';
import App from './App';
//import { selectOptions } from '@testing-library/user-event/dist/select-options';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'nl', 'pt'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },

    // react: { useSuspense: false }
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
    react: { useSuspense: false},
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);