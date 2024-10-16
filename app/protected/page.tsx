import Link from "next/link";
import { signOut, withAuth } from "@workos-inc/authkit-nextjs";

export default async function Protected() {
  const { user } = await withAuth();

  return (
    <main className="w-[25rem] border my-12 mx-auto p-4 text-center">
      <h2 className="text-lg font-medium">Protected page</h2>
      <div className="my-4">
        <Link href="/" className="underline my-4 inline-block">
          Home Page
        </Link>
      </div>
      <div className="my-4">
        <p>Welcome, {user?.firstName}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </div>
    </main>
  );
}
