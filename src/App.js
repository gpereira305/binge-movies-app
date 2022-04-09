import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes";
import FooterMovies from "./components/FooterMovies";
import HeaderMovies from "./components/HeaderMovies";

const App = () => (
  <>
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <HeaderMovies {...props} />
            <Routes />
            <FooterMovies />
          </>
        )}
      />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
