import { Navigate, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notes" />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
