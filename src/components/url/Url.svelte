<script lang="ts">
  import UrlForm from "./UrlForm.svelte";

  let miniUrl = "";

  const copy = () => {
    navigator.clipboard.writeText(miniUrl);
  };
</script>

<UrlForm miniUrl={(url) => (miniUrl = url)} />
{#if miniUrl}
  <p>{miniUrl}</p>
  <button on:click={copy}>COPY</button>
{/if}

<style>
</style>
