import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DefaultLayout from "./pages/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/contact" />
          <Route path="/about" />
          <Route path="/posts">
            <Route index element={<h1>Elenco post</h1>} />
            <Route path=":id" />
            <Route path="create" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
