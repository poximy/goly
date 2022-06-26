<script lang="ts">
  import { create } from '@lib/goly';

  import { fade, fly } from 'svelte/transition';
  import Nav from '@components/Nav.svelte';

  let url = '';
  let errorMessage = '';

  let golyUrl = '';

  async function handleSubmit() {
    if (url === '') {
      errorMessage = 'url cannot be empty';
      return;
    }
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      golyUrl = await create(apiUrl, url);
    } catch (error) {
      errorMessage = error;
    }
  }

  $: if (errorMessage !== '') {
    setTimeout(() => {
      errorMessage = '';
    }, 5000);
  }
</script>

<Nav />

<main
  class="relative flex h-screen w-full flex-col flex-wrap items-center justify-center"
>
  {#if errorMessage !== ''}
    <div
      id="error"
      class="fixed top-0 z-10 flex h-12 w-full items-center justify-center
      bg-danger p-2 sm:h-14 sm:max-w-[75%] sm:rounded-b md:max-w-[50%]"
      in:fly={{
        y: -document.getElementById('error').offsetHeight,
        duration: 500,
      }}
      out:fade
      on:click={() => (errorMessage = '')}
    >
      <p class="truncate font-sans text-2xl font-bold capitalize text-light">
        {errorMessage}!
      </p>
    </div>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <div class="relative flex justify-center">
      {#if golyUrl !== ''}
        <div
          class="absolute -top-14 flex flex-row items-center justify-center gap-4
        font-mono text-lg sm:text-2xl"
        >
          <a
            href={golyUrl}
            target="_blank"
            rel="noreferrer"
            class="text-dark underline-offset-2 hover:underline dark:text-light"
          >
            <p>
              {golyUrl}
            </p>
          </a>
          <button
            type="button"
            on:click={() => console.log('copy')}
            class="box-border aspect-video h-12 rounded border border-dark p-2
					font-sans text-xl font-bold text-dark transition-all duration-500
					hover:bg-dark hover:text-light hover:duration-100 dark:border-light
					dark:text-light dark:hover:bg-light dark:hover:text-dark"
          >
            Copy
          </button>
        </div>
      {/if}
      <input
        id="url"
        type="text"
        bind:value={url}
        placeholder="Insert URL..."
        class="h-12 w-72 rounded-l border border-r-0 border-dark bg-light px-2
      font-mono text-xl focus:outline-none dark:border-none sm:h-14 sm:w-96
			sm:px-4 md:w-[32rem] lg:w-[48rem]"
      />
      <button
        type="submit"
        class="box-border aspect-square h-12 rounded-r border border-l-0
		  border-dark bg-primary p-2 hover:bg-[#2363be] dark:border-none sm:h-14"
      >
        <svg
          class="h-8 w-8 stroke-white sm:h-10 sm:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656
          5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0
          00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </button>
    </div>
  </form>
</main>
