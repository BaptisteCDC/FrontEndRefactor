import React from "react";
import "./App.css";
import { OpenClosePanelContextProvider } from './context';
import { Banner, FakeFooter, FakeMenu } from './layout';
import { Gallery } from './pages';

function App() {
  return (
    <div className="app-container">
        <header className="banner">
          <Banner />
      </header>
      <FakeMenu />
      <h1>Decouvrez nos magnifiques paysages</h1>
      <OpenClosePanelContextProvider>
        <Gallery />
      </OpenClosePanelContextProvider>
      <FakeFooter />
    </div>
  );
}

export default App;
