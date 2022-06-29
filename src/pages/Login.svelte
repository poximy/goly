<script lang="ts">
  let username = '';
  let password = '';
  let inputError: Array<string> = [];

  function handleSubmit() {
    formErrors();
    if (inputError.length !== 0) {
      return;
    }
  }

  function formErrors() {
    if (username === '' && password === '') {
      inputError = ['username', 'password'];
      return;
    }
    if (username === '') {
      inputError = ['username'];
      return;
    }
    if (password === '') {
      inputError = ['password'];
    }
  }

  $: includesUsername = inputError.includes('username');
  $: includesPassword = inputError.includes('password');
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="relative flex h-screen w-full grow flex-col items-center justify-center
  gap-8 font-mono text-xl text-dark"
>
  <a
    href="/signup"
    class="text-base text-light/50 hover:text-light hover:underline"
  >
    Signup
  </a>
  <div class="relative">
    <input
      type="text"
      id="username"
      bind:value={username}
      placeholder="username"
      class:border-danger={includesUsername}
      class:border-2={includesUsername}
      class="peer h-[48px] rounded bg-light px-2 focus:outline-none sm:h-14 sm:w-96"
    />
    <label
      for="username"
      class="absolute -top-6 left-0 text-base text-light transition-all
      ease-out peer-placeholder-shown:text-transparent"
    >
      username:
    </label>
    {#if includesUsername}
      <p class="absolute top-3 -left-5 text-2xl text-danger">*</p>
    {/if}
  </div>
  <div class="relative">
    <input
      type="password"
      bind:value={password}
      placeholder="password"
      class:border-danger={includesPassword}
      class:border-2={includesPassword}
      class="peer h-[48px] rounded bg-light px-2 focus:outline-none sm:h-14 sm:w-96"
    />
    <label
      for="password"
      class="absolute -top-6 left-0 text-base text-light transition-all
      ease-out peer-placeholder-shown:text-transparent"
    >
      password
    </label>
    {#if includesPassword}
      <p class="absolute top-3 -left-5 text-2xl text-danger">*</p>
    {/if}
  </div>
  <button
    type="submit"
    class="h-[48px] w-24 rounded border border-light bg-neutral-700 p-2
		font-sans text-white transition-all duration-500 hover:border-none
		hover:bg-primary hover:text-light hover:duration-100"
  >
    Login
  </button>
</form>
