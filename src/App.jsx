import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hello, About, Projects, Resume } from "./pages/index.js";
import { Footer, NavBar } from "./components/index.js";

function App() {
  const routes = [
    { path: "/", element: <Hello /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/resume", element: <Resume /> },
  ];

  return (
    <BrowserRouter>
      <div className="main-container">
        <NavBar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
