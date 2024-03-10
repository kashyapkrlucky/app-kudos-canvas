import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import { useState } from "react";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
