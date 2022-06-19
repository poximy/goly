import Nav from '@components/Nav';

import { useState, FormEvent } from 'react';

import Link from 'next/link';
import type { NextPage } from 'next';

const LogIn: NextPage = () => {
  // TODO validate error handling / viewable
  const [error, setError] = useState<string>('');

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username === '') {
      setError('empty username');
      return;
    }

    if (password === '') {
      setError('empty password');
    }

    // TODO finish submit to api
  };

  return (
    <>
      <Nav />

      <form
        onSubmit={handleSubmit}
        className='flex h-screen flex-col items-center justify-center gap-6 font-mono text-xl'
      >
        <Link href='/signup'>
          <a className='text-base leading-none text-white/50 underline hover:text-white'>
            signup
          </a>
        </Link>
        <div className='relative'>
          <input
            id='username'
            type='text'
            value={username}
            placeholder='username'
            onChange={e => setUsername(e.target.value)}
            className='peer h-[48px] rounded px-2 focus:outline-none sm:h-14 sm:w-96'
          />
          <label
            htmlFor='username'
            className='absolute -top-6 left-0 text-base text-white transition-all
						ease-out peer-placeholder-shown:text-transparent'
          >
            username
          </label>
        </div>
        <div className='relative'>
          <input
            type='password'
            value={password}
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
            className='peer h-[48px] rounded px-2 focus:outline-none sm:h-14 sm:w-96'
          />
          <label
            htmlFor='password'
            className='absolute -top-6 left-0 text-base text-white transition-all
						ease-out peer-placeholder-shown:text-transparent'
          >
            password
          </label>
        </div>
        <button
          type='submit'
          className='h-[48px] w-24 rounded border p-2 font-sans text-white
					hover:bg-white hover:text-black'
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LogIn;
