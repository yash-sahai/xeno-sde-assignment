import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <button onClick={() => signIn("google")}>Login with Google</button>;
  }

  return (
    <div>
      <p>Welcome {session.user?.email}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
