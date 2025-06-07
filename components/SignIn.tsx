"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    // mode="modal" opens a sign-in modal window right on the current page
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
