"use client"
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function Signin() {
  const { register, handleSubmit } = useForm();

  const handleSignIn = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });

    console.log(res, error);
  };
  return (
    <div className=" bg-[#f8fafc] flex items-center justify-center p-4 font-sans py-20">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8 sm:p-10 border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500">
            Log in to your account to continue learning.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700 ml-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="john@example.com"
              className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700 ml-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="••••••••"
              className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
              required
            />
          </div>

          <div className="flex items-center justify-between pt-1 pb-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-100 border-slate-300"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 font-semibold hover:underline transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Or log in with
          </span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <button className="w-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 mb-8">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-bold hover:underline transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
