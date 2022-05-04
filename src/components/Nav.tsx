import Link from 'next/link';
import type { FC } from 'react';

const Nav: FC = () => {
  return (
    <div
      className="absolute top-0 z-10 my-8 grid w-full grid-cols-2 items-center
			gap-y-4 font-sans text-xl text-white sm:gap-y-8 md:grid-cols-3"
    >
      <nav className="col-span-2 w-fit place-self-center text-center text-4xl font-bold sm:col-span-1">
        <Link href="/">
          <a>
            <h1>Minify URL</h1>
          </a>
        </Link>
      </nav>

      <div className="col-span-2 flex justify-center gap-x-4 text-center font-sans sm:col-span-1 md:col-start-3">
        <Link href="/login">
          <a className="h-[48px] w-24 border hover:bg-white hover:text-black items">
            Log in
          </a>
        </Link>
        <Link href="/signup">
          <a className="h-[48px] w-24 border hover:bg-white hover:text-black">
            Sign up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
