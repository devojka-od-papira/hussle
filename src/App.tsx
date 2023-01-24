import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Login from './views/login';
import Board from './views/board';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.BOARD} element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
