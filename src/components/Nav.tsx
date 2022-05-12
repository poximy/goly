import Link from 'next/link';
import type { FC } from 'react';
import { useRouter } from 'next/router';

const Nav: FC = () => {
  const router = useRouter();
  const path = router.pathname;

  if (path === '/login' || path === '/signup') {
    return (
      <nav
        className='absolute top-0 z-10 my-8 flex h-[48px] w-full items-center
				justify-center text-white'
      >
        <Link href='/'>
          <a className='font-sans text-4xl font-bold leading-none'>
            <h1>Minify URL</h1>
          </a>
        </Link>
      </nav>
    );
  }

  return (
    <nav
      className='absolute top-0 z-10 my-8 grid w-full grid-cols-2 gap-y-4
			text-center font-sans text-white md:grid-cols-3'
    >
      <Link href='/'>
        <a
          className='col-span-2 w-fit self-center justify-self-center text-4xl
					font-bold leading-none sm:col-span-1 md:col-start-2'
        >
          <h1>Minify URL</h1>
        </a>
      </Link>
      <div
        className='col-span-2 flex flex-row items-center justify-center gap-x-4
				text-center text-xl sm:col-span-1 md:col-start-3'
      >
        <Link href='/login'>
          <a className='h-[48px] w-24 rounded border py-2 hover:bg-white hover:text-black'>
            Log in
          </a>
        </Link>
        <Link href='/signup'>
          <a className='h-[48px] w-24 rounded border py-2 hover:bg-white hover:text-black'>
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
