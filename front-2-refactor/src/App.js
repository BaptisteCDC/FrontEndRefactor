import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Banner, FakeFooter, FakeMenu } from './layout';

function App() {
  return (
    <div className="app-container">
      <header className="banner">
          <Banner />
      </header>
      <FakeMenu />
        <Outlet />
      {/* <h1>Decouvrez nos magnifiques paysages</h1>
      <OpenClosePanelContextProvider>
        <Gallery />
      </OpenClosePanelContextProvider> */}
      <FakeFooter />
    </div>
  );
}

export default App;
