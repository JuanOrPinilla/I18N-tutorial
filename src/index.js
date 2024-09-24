import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es"; // Mensajes en español
import localeEnMessages from "./locales/en"; // Mensajes en inglés
import JobsList from "./components/jobslist";

// Asociar los idiomas a los mensajes correspondientes
const messages = {
  en: localeEnMessages,
  es: localeEsMessages,
};

const Index = () => {
  // Estado para controlar el idioma
  const [language, setLanguage] = useState("en");

  // Obtener dinámicamente el idioma del navegador
  useEffect(() => {
    const browserLanguage = navigator.language.split(/[-_]/)[0]; // (es, en)
    setLanguage(browserLanguage === "es" || browserLanguage === "en" ? browserLanguage : "en"); 
  }, []);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <JobsList />
    </IntlProvider>
  );
};

// Renderizar el componente en el DOM
ReactDOM.render(<Index />, document.getElementById("root"));
