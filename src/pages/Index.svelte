<script lang="ts">
  import { create } from '@lib/goly';

  import { fade, fly } from 'svelte/transition';

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
    }, 3000);
  }
</script>

<main
  class="relative flex h-screen w-full flex-col flex-wrap items-center
  justify-center gap-4 text-xl"
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
      <p class="truncate font-sans text-xl font-bold capitalize text-light">
        {errorMessage}!
      </p>
    </div>
  {/if}
  {#if golyUrl !== ''}
    <div
      class="absolute top-1/3 flex -translate-y-1/3 flex-col items-center
      justify-center gap-4 rounded font-mono text-xl sm:flex-row"
    >
      <a
        href={golyUrl}
        target="_blank"
        rel="noreferrer"
        class="px-2 text-light underline-offset-2 hover:underline"
      >
        {golyUrl}
      </a>
      <button
        type="button"
        on:click={() => navigator.clipboard.writeText(golyUrl)}
        class="group box-border aspect-square h-12 rounded border p-2 hover:bg-light sm:h-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 stroke-light group-hover:stroke-dark sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width={1}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0
            002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  {/if}
  <form on:submit|preventDefault={handleSubmit} class="flex justify-center">
    <input
      id="url"
      type="text"
      bind:value={url}
      placeholder="Insert URL..."
      class="h-12 w-72 rounded-l border-none bg-light px-2 font-mono
      focus:outline-none sm:h-14 sm:w-96 sm:px-4 md:w-[32rem] lg:w-[48rem]"
    />
    <button
      type="submit"
      class="box-border aspect-square h-12 rounded-r
      border-none bg-primary p-2 hover:bg-[#2363be] sm:h-14"
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
  </form>
</main>
