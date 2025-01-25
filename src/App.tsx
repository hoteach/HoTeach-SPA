import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
} from 'react-router-dom';
import { RoutePage } from './types';
import HelloWorld from './pages/hello-world/HelloWorld';

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path={RoutePage.HOME} element={<App />}>
      <Route path={RoutePage.HELLO_WORLD} element={<HelloWorld />}></Route>
    </Route>
  )
);

function App() {
  return (
    <main className="w-screen h-screen bg-white">
      <Outlet />
    </main>
  );
}

export default App;
