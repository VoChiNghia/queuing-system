import React from 'react';

import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "@remix-run/router";
import Login from './view/auth/Login';
import ResetPass from './view/auth/ResetPass';
import CreateNewPass from './view/auth/CreateNewPass';
import Home from './view/home/Home';


export const history = createBrowserHistory({ v5Compat: true });

function App() {
  return (
    <HistoryRouter history={history}>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/reset-password' element={<ResetPass />}></Route>
      <Route path='/create-new-password' element={<CreateNewPass />}></Route>
       
    </Routes>
  </HistoryRouter>
  );
}

export default App;
