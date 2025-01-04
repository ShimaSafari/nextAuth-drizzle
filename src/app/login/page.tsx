import { SignIn } from "@/components/sign-in";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg bg-white">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold">Sign in with magic link</h2>
          <div className="text-center text-sm mt-4 ">
            Don&apos;t have an account?{" "}
            <a href="/register" className="underline underline-offset-4">
              register
            </a>
            <a href="/" className="underline underline-offset-4 pl-3">
              home
            </a>
          </div>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default LoginForm;
