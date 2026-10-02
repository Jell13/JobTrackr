import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../lib/auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const GitHubCallback = () => {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      console.error("No code found in GitHub callback URL");
      navigate("/login");
      return;
    }

    const exchangeCode = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/github`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        if (!res.ok) {
          console.error("GitHub login failed");
          navigate("/login");
          return;
        }

        const data = await res.json();
        setTokens(data.accessToken, data.refreshToken);
        navigate("/board");
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    exchangeCode();
  }, [navigate]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p>Signing you in with GitHub...</p>
    </div>
  );
};

export default GitHubCallback;