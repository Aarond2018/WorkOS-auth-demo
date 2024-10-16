import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[25rem] border my-12 mx-auto p-4 text-center">
      <h2 className="text-lg font-medium">WorkOS Auth Demo app</h2>
      <div className="my-4">
        <p>A basic Next.js 14 application that demonstrates authentication with WorkOS</p>
        <Link href="/protected" className="underline my-4 inline-block">Protected Page</Link>
      </div>
    </main>
  );
}
