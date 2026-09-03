import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginScreen from "./pages/LoginScreen";
import Board from "./pages/Board";
import GitHubCallback from "./pages/GithubCallback";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/auth/github/callback" element={<GitHubCallback />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}