import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import routes from './routers/Router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            name={route.name}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
