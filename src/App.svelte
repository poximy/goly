<script lang="ts">
  import Url from "./components/url/Url.svelte";
  import Nav from "./components/nav/Nav.svelte";

  let jwtToken: string = "";
  let page: page = "url";
  let backBtn = false;

  const urls = () => {
    if (backBtn) {
      page = "url";
      backBtn = false;
    } else {
      if (jwtToken === "") {
        page = "auth";
      } else {
        page = "metadata";
      }
      backBtn = true;
    }
  };
</script>

<Nav {urls} {backBtn} />
<main>
  {#if page === "url"}
    <Url />
  {:else if page === "auth"}
    <p>auth</p>
  {:else if page === "metadata"}
    <p>metadata</p>
  {/if}
</main>

<style>
</style>
