"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/",
      });

      if (result?.error) {
        setStatus("error");
      }
      else {
        setStatus("success");
        
        
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white hover:shadow-md hover:shadow-blue-500/50 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Sign in with Email"}
        </button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        <div className="flex flex-col mt-4 gap-3">
          <Button
            type="submit"
            variant="outline"
            onClick={() => signIn("google")}
          >
            <img src="/google-logo.svg" alt="Google" className="h-5 mr-5" />
            Continue with Google
          </Button>
          <Button
            type="submit"
            variant="outline"
            onClick={() => signIn("github")}
          >
            <img src="/github-logo.svg" alt="GitHub" className="h-5 mr-5" />
            Continue with Github
          </Button>
        </div>
      </form>
      <div>
        {status === "success" && (
          <p className="text-sm text-green-600">
            Check your email for the magic link!
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </>
  );
}
