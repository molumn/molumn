import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from "react-router-dom";


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
      <HashRouter>
          <Routes>
              <Route index element={<Main />} />
              <Route path={"/molumn/"} element={<Main />} />
              <Route path={"/molumn/#/*"} element={<NotFound404 />}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
);


