import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WorksListPage from "./pages/WorksListPage/WorksListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />

        <Route
          path="/congratulations"
          element={<WorksListPage title={"Лучшее поздравление"} />}
        />
        <Route
          path="/paintings"
          element={<WorksListPage title={"Лучший рисунок"} />}
        />
        <Route
          path="/handmade"
          element={<WorksListPage title={"Очумелые ручки"} />}
        />
      </Routes>
    </>
  );
}

export default App;
