<script lang="ts">
  import { error } from '@lib/stores';
  import { fade, fly } from 'svelte/transition';

  $: if ($error !== '') {
    setTimeout(() => {
      error.set('');
    }, 3000);
  }
</script>

{#if $error !== ''}
  <div
    id="error"
    class="fixed top-0 right-1/2 z-10 m-auto flex h-12 w-full translate-x-1/2
    items-center justify-center bg-danger p-2 sm:h-14 sm:max-w-[75%]
    sm:rounded-b md:max-w-[50%]"
    in:fly={{
      y: -document.getElementById('error').offsetHeight,
      duration: 500,
    }}
    out:fade
    on:click={() => ($error = '')}
  >
    <p class="truncate font-sans text-xl font-bold capitalize text-light">
      {$error}!
    </p>
  </div>
{/if}
