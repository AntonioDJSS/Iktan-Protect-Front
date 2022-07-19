import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./layout/RutaProtegida";

import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";
import ContactEmail from "./pages/ContactEmail";
import Feed from "./pages/Feed";
import Metodologia from "./pages/Metodologia";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

import PoliticasPrivacidad from "./components/PoliticasPrivacidad";

import { AuthProvider } from "./context/AuthProvider";
import { QuizProvider } from "./context/QuizProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Inicio />} />
              <Route path="*" element={<Error404 />} />
              <Route path="email" element={<ContactEmail />} />
              <Route path="feed" element={<Feed />} />
              <Route path="metodologia" element={<Metodologia />} />
              {/*           <Route path="encuesta" element={<Encuesta/>} />
               */}
              <Route path="calificanos" element={<Login />} />
              <Route path="Politicas-Privacidad" element={< PoliticasPrivacidad/>} />
            </Route>

            <Route path="/encuesta" element={<RutaProtegida />}>
              <Route index element={<Quiz />} />
            </Route>
          </Routes>
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
