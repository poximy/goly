<script lang="ts">
  import UrlForm from "./UrlForm.svelte";
  export let jwtToken: string = "";

  let miniUrl = "";

  const copy = () => {
    navigator.clipboard.writeText(miniUrl);
  };
</script>

<UrlForm miniUrl={(url) => (miniUrl = url)} {jwtToken} />
{#if miniUrl}
  <div>
    <a href={miniUrl}>{miniUrl}</a>
    <button on:click={copy}>COPY</button>
  </div>
{/if}

<style>
  div {
    display: flex;
    justify-content: center;
  }

  a {
    color: #1f1f1f;
    font-size: 1.5em;
    padding: 0.25em 0.5em;
    text-decoration: none;
    background-color: #e6e8e8;
    border-radius: 0.5em 0 0 0.5em;
    font-family: "Play", sans-serif;
  }

  button {
    border: none;
    border-radius: 0 0.5em 0.5em 0;
    background-color: #248f8f;
    padding: 0.25em 0.5em;
    font-size: 1.25em;
  }
</style>
