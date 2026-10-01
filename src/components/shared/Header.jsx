"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

export default  function Header() {
  const { data: session, isPending } = authClient.useSession();
  const userData = session?.user;
  return (
    <div className="bg-gray-100">
      <div className=" container mx-auto flex justify-between items-center py-4 ">
        <div>
          <h1 className="text-2xl font-semibold">Online Course</h1>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
         <div>
         {
          isPending ? <><p>Loading...</p></> : <>
          {userData ? <>
          <div className="flex items-center gap-4">
            <p>Hello : {userData.name}</p>
            <Link href="/dashboard">
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
            Dashboard
          </button>
         </Link>
            <Link href="/signin">
          <button onClick={async() => await authClient.signOut()} className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
            Logout
          </button>
         </Link>
          </div>
          </> : <><Link href="/signin">
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
            Sign In
          </button>
         </Link></>}
          </>
         }
         </div>
        </div>
      </div>
    </div>
  );
}
