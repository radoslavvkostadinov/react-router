import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "../contexts/AuthContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>

        {/* when path route is this load this comp */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </AuthContextProvider>
  )
}

export default App
