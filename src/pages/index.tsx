import axios from 'axios';
import Head from 'next/head';
import type { NextPage } from 'next';

import { useState, FormEvent } from 'react';

const createUrl = async function (url: string): Promise<void> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl === undefined) {
      throw new Error('No API URL defined');
    }

    const res = await axios.post(apiUrl, {
      url,
    });

    if ('id' in res.data && 'url' in res.data) {
      if (typeof res.data.id === 'string' && typeof res.data.url === 'string') {
        // TODO action after url is created
        // COPY and show link
        return;
      }
      throw new Error('Recieved incorrect field types');
    }
    throw new Error('Recieved missing fields');
  } catch (error) {
    console.error(error);
  }
};

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>('');

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createUrl(url);
    setUrl('');
  };

  return (
    <>
      <Head>
        <title>Minify URL</title>
      </Head>

      <form
        onSubmit={handleSubmit}
        className="relative flex h-screen items-center justify-center"
      >
        <input
          id="url"
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Insert URL..."
          className="h-12 w-72 rounded-l px-2 font-mono text-xl focus:outline-none
					sm:h-14 sm:w-96 sm:px-4 md:w-[32rem] lg:w-[48rem]"
        />
        <button
          type="submit"
          className="rounded-r bg-blue-600 p-2 hover:bg-blue-700"
        >
          <svg
            className="h-8 w-8 stroke-white sm:h-10 sm:w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656
                5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4
                0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default Home;
