import React from "react";
import Link from "next/link";
import { getSignInUrl, getSignUpUrl } from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();


  return (
    <header className="w-full flex my-6 px-8 gap-4 justify-between items-center">
      <Link href="/" className="text-lg font-medium">WorkOS Auth Demo</Link>

      <div className="flex gap-4">
        <Link href={signInUrl}>Sign In</Link>
        <Link href={signUpUrl}>Sign Up</Link>
      </div>
    </header>
  );
}
