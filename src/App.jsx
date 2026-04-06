import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import NotFound from "./components/ui/notFound/NotFound";
import Protected from "./components/routing/protected/Protected";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(true);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route
            path="library"
            element={
              <Protected isSignedIn={loggedIn}>
                {" "}
                <Dashboard />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
