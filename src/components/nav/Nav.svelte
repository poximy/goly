<script lang="ts">
  export let urls: () => void;
  export let backBtn: boolean
</script>

<nav>
  <ul>
    <li>
      <header>
        <h1>Minify URL</h1>
      </header>
    </li>
    {#if backBtn}
      <li>
        <button on:click={urls}>Back</button>
      </li>
    {:else}
      <li>
        <button on:click={urls}>My Urls</button>
      </li>
    {/if}
  </ul>
</nav>

<style>
  nav {
    padding: 1.25em 2.5em;
    font-family: "Play", cursive;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style-type: none;
    display: inline-block;
  }

  header {
    display: inline-block;
  }

  h1 {
    font-size: 2.5em;
    font-family: "Raleway", sans-serif;
    color: #e6e8e8;
  }

  button {
    font-size: 1.75em;
    border: none;
    padding: 0.25em;
    background-color: #248f8f;
    border-radius: 0.5em;
  }
</style>
