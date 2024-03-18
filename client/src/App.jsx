import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { ChatContextProvider } from "./context/ChatContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />}></Route>
          <Route
            path="/register"
            element={user ? <Chat /> : <Register />}
          ></Route>
          <Route path="/login" element={user ? <Chat /> : <Login />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}

export default App;
