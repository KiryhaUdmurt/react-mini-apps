import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import Counter from "./Components/Counter/Counter";
import Modal from "./Components/Modal/Modal";
import Quiz from "./Components/Quiz/Quiz";
import Users from "./Components/Users/Users";
import CurrencyConverter from "./Components/CurrencyConverter/CurrencyConverter";

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/users" element={<Users />} />
          <Route path="/converter" element={<CurrencyConverter />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
