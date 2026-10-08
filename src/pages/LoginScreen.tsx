import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Reveal from "../components/Reveal";
import { setTokens } from "../lib/auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID as string;

const VALUE_PROPS = [
  "Visualize every application on one Kanban board",
  "Keep interviews, contacts, and notes in one place",
  "See your pipeline health at a glance",
];

const LoginScreen = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken: tokenResponse.access_token }),
        });
        if (!response.ok) {
          const body = await response.json();
          console.error(body);
          throw new Error("Google login failed");
        }
        const data = await response.json();
        setTokens(data.accessToken, data.refreshToken);
        navigate("/board");
      } catch (err) {
        console.error(err);
      }
    },
    onError: () => console.error("Google login failed"),
  });

  const handleGitHubLogin = () => {
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      redirect_uri: "http://localhost:5173/auth/github/callback",
      scope: "read:user user:email",
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  };

  return (
    <main className="w-full min-h-screen">
      <div className="w-full min-h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Brand panel — hidden on mobile, decorative, not critical to the sign-in task */}
        <section className="hidden lg:flex justify-center items-center bg-accent-dark text-accent-tint p-16 relative overflow-hidden">
          <div className="absolute w-[380px] h-[380px] rounded-full bg-[#FFFFFF0F] blur-3xl -top-28 -right-36" />
          <div className="absolute w-[320px] h-[320px] rounded-full bg-[#FFFFFF0F] blur-3xl -left-32 -bottom-36" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-accent/20 blur-3xl top-1/3 left-1/4" />

          <Reveal className="relative flex flex-col justify-between h-full w-full gap-5">
            <Logo size="lg" />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col font-heading">
                <h2 className="text-5xl font-semibold text-accent-tint/80 leading-tight">Get organized.</h2>
                <h2 className="text-5xl font-bold text-white leading-tight">Get hired.</h2>
              </div>

              <p className="text-accent-tint/80 text-[15px] leading-relaxed max-w-[420px]">
                One board for every application, interview, and offer — so
                nothing falls through the cracks during your search.
              </p>

              <ul className="list-none flex flex-col gap-3 mt-1">
                {VALUE_PROPS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px]">
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-accent-tint/60 text-sm">© {year} JobTrackr</div>
          </Reveal>
        </section>

        {/* Form panel */}
        <section className="flex justify-center items-center px-6 sm:px-12 lg:px-20 py-16">
          <Reveal className="flex flex-col gap-6 w-full max-w-[400px]">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Welcome back</span>
              <h3 className="font-heading text-3xl font-bold tracking-tight text-text-primary">Sign in to JobTrackr</h3>
              <p className="text-text-secondary text-[15px]">Track your job search in one place</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => googleLogin()}
                className="px-6 py-3 border border-border rounded-lg flex justify-center items-center gap-2.5 font-medium text-text-primary cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-text-secondary/40"
              >
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>
              <button
                type="button"
                onClick={handleGitHubLogin}
                className="px-6 py-3 rounded-lg bg-[#111827] text-white flex justify-center items-center gap-2.5 font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#1F2937]"
              >
                <FaGithub className="w-5 h-5" />
                Continue with GitHub
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-text-muted text-xs">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="button"
                className="text-sm font-medium text-text-secondary cursor-pointer transition-colors duration-200 hover:text-accent underline-offset-4 hover:underline"
              >
                Continue with email instead
              </button>
            </div>

            <p className="text-text-muted text-center text-xs leading-relaxed">
              By continuing, you agree to JobTrackr's{" "}
              <a href="/terms" className="text-accent hover:underline cursor-pointer">Terms of Service</a>{" "}
              and{" "}
              <a href="/privacy" className="text-accent hover:underline cursor-pointer">Privacy Policy</a>.
            </p>
          </Reveal>
        </section>
      </div>
    </main>
  );
};

export default LoginScreen;