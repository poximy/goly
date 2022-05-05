import Link from 'next/link';
import type { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav
      className="absolute top-0 z-10 my-8 grid w-full grid-cols-2 gap-y-4
			text-center font-sans text-white md:grid-cols-3"
    >
      <Link href="/">
        <a
          className="col-span-2 w-fit self-center justify-self-center text-4xl
					font-bold leading-none sm:col-span-1 md:col-start-2"
        >
          <h1>Minify URL</h1>
        </a>
      </Link>
      <div
        className="col-span-2 flex flex-row items-center justify-center gap-x-4
				text-center text-xl sm:col-span-1 md:col-start-3"
      >
        <Link href="/login">
          <a className="h-[48px] w-24 rounded border py-2 hover:bg-white hover:text-black">
            Log in
          </a>
        </Link>
        <Link href="/signup">
          <a className="h-[48px] w-24 rounded border py-2 hover:bg-white hover:text-black">
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
