import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";
import ContactEmail from "./pages/ContactEmail";
import Feed from "./pages/Feed";
import Metodologia from "./pages/Metodologia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
          <Route path="email" element={<ContactEmail />} />
          <Route path="feed" element={<Feed />} />
          <Route path="metodologia" element={<Metodologia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
