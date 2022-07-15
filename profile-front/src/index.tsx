import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import "./index.css";


import NotFound404 from "./pages/error/NotFound404";
import Main from "./pages/Main";



/* index.html id = preset */

const preset = ReactDOM.createRoot(document.getElementById('preset')!!)

preset.render(
    <>
    </>
);


/* index.html division id = root */

const root = ReactDOM.createRoot(document.getElementById('root')!!);

root.render(
  <React.StrictMode>
      <BrowserRouter basename={"https://molumn.github.io/molumn"}>
          <Routes>
              <Route index element={<Main />} />
              <Route path={"/"} element={<Main />} />
              <Route path={"/*"} element={<NotFound404 />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


