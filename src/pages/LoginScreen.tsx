import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID as string;

const LoginScreen = () => {

  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();

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
        throw new Error("Error:", body)
      };
      const data = await response.json();
      localStorage.setItem("token", data.token);
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
    <main className="w-full h-screen">
      <div className="w-full h-full grid grid-cols-2">
        <section className="flex justify-center items-center bg-accent-dark text-accent-tint p-16 relative">
          <div className="absolute w-85 h-85 rounded-full bg-[#FFFFFF0F] -top-28 -right-36" />
          <div className="absolute w-75 h-75 rounded-full bg-[#FFFFFF0F] -left-32 -bottom-36" />

          <div className="flex flex-col justify-between h-full w-full gap-5">
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 rounded-md bg-avatar-1-text flex justify-center items-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="10" width="4" height="11" rx="1" fill="white" />
                  <rect x="10" y="5" width="4" height="16" rx="1" fill="white" />
                  <rect x="17" y="13" width="4" height="8" rx="1" fill="white" />
                </svg>
              </div>
              JobTrackr
            </div>

            <div className="">
              <div className="flex flex-col">
                <h2 className="text-4xl">Get organized.</h2>
                <h2 className="text-4xl">Get hired.</h2>
              </div>
              <div>
                <p className="text-text-secondary">
                  One board for every application, interview, and offer — so
                  nothing falls through the cracks during your search.
                </p>
              </div>
              <div className="">
                <ul className="list-none flex flex-col gap-2">
                  <li>Visualize every application on one Kanban board</li>
                  <li>Keep interviews, contacts, and notes in one place</li>
                  <li>See your pipeline health at a glance</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-end text-text-secondary">©{year} JobTrackr</div>
          </div>
        </section>

        <section className="flex justify-center items-center z-10 px-36">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-accent text-lg tracking-wide">WELCOME BACK</h2>
              <h3 className="text-3xl">Sign in to JobTrackr</h3>
              <p className="text-text-secondary">Track your job search in one place</p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => googleLogin()}
                className="px-12 border py-2 rounded-md btn-primary:hover flex justify-center items-center gap-2"
              >
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>
              <button
                type="button"
                onClick={handleGitHubLogin}
                className="px-12 border py-2 rounded-md bg-[#111827] text-accent-tint btn-primary:hover flex justify-center items-center gap-2"
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
              <button type="button">Continue with email instead</button>
            </div>
            <div>
              <p className="text-text-muted text-center line-clamp-2">
                By continuing, you agree to JobTrackr's{" "}
                <a className="text-accent">Terms of Service</a> and{" "}
                <a className="text-accent">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginScreen;
