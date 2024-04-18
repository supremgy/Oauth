'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Home() {
  const { data: session } = useSession();
  return (
    <div className='flex flex-col mt-52 w-100 items-center gap-20'>
      <h1 className='text-2xl'>
        {session ? `Signed in as ${session.user?.name} ` : 'Dang Dang Walk'}
      </h1>
      <button
        onClick={session ? () => signOut() : () => signIn()}
        className='w-80 h-10 rounded-md drop-shadow-xl bg-orange-400'
      >
        {session ? 'Sign out' : 'Sign In'}
      </button>
    </div>
  );
}
