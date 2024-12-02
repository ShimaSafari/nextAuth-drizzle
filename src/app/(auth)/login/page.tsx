"use client"
import { signIn } from "next-auth/react"
const LoginForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 ">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Sign in to your account
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        {/* Remember me and Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button  type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4">
          <button type="submit" onClick={() => signIn("google")} className="flex items-center px-12 py-2 border border-gray-300 rounded-lg hover:bg-gray-100" >
            <img src="/google-logo.svg" alt="Google" className="h-5 w-5 mr-2" />
            Google
          </button>
          <button type="submit" onClick={() => signIn("github")} className="flex items-center px-12 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <img src="/github-logo.svg" alt="GitHub" className="h-5 w-5 mr-2" />
            GitHub
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member? <a href="#" className="text-indigo-600 hover:underline">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
