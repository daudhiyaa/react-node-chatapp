import { useState } from "react";

import "./App.css";

import AuthPage from "./pages/AuthPage";
import PrettyChatsPage from "./pages/PrettyChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <PrettyChatsPage user={user} />;
  }
}

export default App;
