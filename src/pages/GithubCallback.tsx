import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const GitHubCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      navigate("/login");
      return;
    }

    const exchangeCode = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/github`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) throw new Error("GitHub login failed");

        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/board");
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    exchangeCode();
  }, [searchParams, navigate]);

  return <p>Signing you in with GitHub…</p>;
};

export default GitHubCallback;