import React from "react";
import {Helmet} from "react-helmet";
import {ThemeProvider} from "@material-ui/core";
import {lightTheme} from "shared/light";
import {darkTheme} from "shared/dark";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ActualLayout} from "../../layouts/main";
import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          sidebar: {
            main: "Work",
            team: "Team",
            news: "News",
            about: "About",
            contact: "Contact",
            client: "Clients",
          },
          home: {
            title: "Change requires creativity",
            subtitle: "We are an Agency for constantly evolving brands",
          },
          news: "News",
          projects: "Projects",
          client: "Clients",
          team: "Team",
        },
      },
      pt: {
        translation: {
          sidebar: {
            main: "Trabalhos",
            team: "Pessoas",
            news: "Notícias",
            about: "Sobre",
            contact: "Contato",
            client: "Clientes",
          },
          home: {
            title: "A mudança requer Criatividade",
            subtitle:
              "Somos uma Agência para marcas em constante transformação.",
          },
          news: "News",
          projects: "Projetos",
          client: "Clientes",
          team: "Pessoas",
        },
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

const TopLayout = ({children}) => {
  const [mode, setMode] = React.useState("dark");
  return (
    <React.Fragment>
      <Helmet>
        <title>Agência Global</title>
        <meta name="adopt-website-id" content="6b5f518c-b930-45df-b0ad-9d04a324f314" />
        <script src="https://tag.goadopt.io/injector.js?website_code=6b5f518c-b930-45df-b0ad-9d04a324f314" class="adopt-injector"></script>
        <script
          type="text/javascript"
          async
          src="https://selo.abradi.com.br/abradi.min.js">
        </script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(function () { emailjs.init("user_t127MAqmhCkHL5pHqI4Mc") })()',
          }}
        />
      </Helmet>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <ActualLayout
          lightMode={mode}
          toggleLightMode={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {children}
        </ActualLayout>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default TopLayout;
