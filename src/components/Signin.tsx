'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div className='flex flex-col items-center mt-52 w-100 py-20 gap-10'>
      {Object.values(providers).map(({ id, name }) => (
        <div key={name}>
          <button
            onClick={() => signIn(id, { callbackUrl })}
            className={`w-80 h-10 rounded-md drop-shadow-xl hover:scale-110 duration-300 ease-in-out ${
              name === 'Google' && 'bg-blue-300'
            } ${name === 'Naver' && 'bg-[#03C75A]'} ${
              name === 'Kakao' && 'bg-[#FEE500]'
            }`}
          >
            Sign in with {name}
          </button>
        </div>
      ))}
    </div>
  );
}
