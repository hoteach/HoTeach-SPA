import './App.css';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
} from 'react-router-dom';
import { RoutePage } from './types';
import HelloWorld from './pages/hello-world/HelloWorld';
import { ThemeProvider } from './contexts/ThemeContext';

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path={RoutePage.HOME} element={<App />}>
      <Route path={RoutePage.HELLO_WORLD} element={<HelloWorld />}></Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <main className="w-screen h-screen bg-white dark:bg-black">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
