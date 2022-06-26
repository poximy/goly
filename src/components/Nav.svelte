<script lang="ts">
  // <nav
  //   className='absolute top-0 z-10 my-8 flex h-[48px] w-full items-center
  // 	justify-center text-white'
  // >
  //     <a href="/" className='font-sans text-4xl font-bold leading-none'>
  //       <h1>Minify URL</h1>
  //     </a>
  // </nav>
</script>

<nav
  class="absolute top-0 z-10 my-8 grid w-full grid-cols-2 gap-y-4 text-center
  font-sans text-darker dark:text-light md:grid-cols-3"
>
  <a
    href="/"
    class="col-span-2 w-fit self-center justify-self-center font-mono text-4xl
    font-bold leading-none sm:col-span-1 md:col-start-2"
  >
    <h1>Goly</h1>
  </a>
  <div
    class="col-span-2 flex flex-row items-center justify-center gap-x-4
    text-center text-xl sm:col-span-1 md:col-start-3"
  >
    <a
      href="/login"
      class="h-[48px] w-24 rounded border border-dark py-2
			transition-all duration-[600ms] hover:bg-dark hover:text-light
		  hover:duration-100 dark:border-light dark:hover:bg-light dark:hover:text-dark"
    >
      Log in
    </a>
    <a
      href="signup"
      class="h-[48px] w-24 rounded border border-dark py-2
			transition-all duration-[600ms] hover:bg-dark hover:text-light
			hover:duration-100 dark:border-light dark:hover:bg-light dark:hover:text-dark"
    >
      Sign up
    </a>
  </div>
</nav>
