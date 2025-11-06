import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Banner, FakeFooter, FakeMenu } from './layout';
import { HandlePaginationContextProvider } from './context'

function App() {
  return (
    <HandlePaginationContextProvider>
      <div className="app-container">
          <Banner />
          <FakeMenu />
          <main className="body-container">
            <Outlet />
          </main>
          <FakeFooter />
      </div>
    </HandlePaginationContextProvider>
 
  );
}

export default App;
