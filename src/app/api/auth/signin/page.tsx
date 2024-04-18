import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/route';
import { redirect } from 'next/navigation';
import { getProviders } from 'next-auth/react';
import Signin from '@/components/Signin';

export default async function SignPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};

  return <Signin providers={providers} callbackUrl='/' />;
}
