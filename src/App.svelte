<script lang="ts">
  import Url from "./components/url/Url.svelte";
  import Nav from "./components/nav/Nav.svelte";

  import Auth from "./components/auth/Auth.svelte";
  import Data from "./components/data/Data.svelte";

  let jwtToken: string = "";
  let page: page = "url";
  let backBtn = false;

  const pageHandler = () => {
    if (backBtn) {
      page = "url";
      backBtn = false;
    } else if (jwtToken === "") {
      page = "auth";
      backBtn = true;
    } else {
      page = "metadata";
      backBtn = true;
    }
  };
</script>

<Nav urls={pageHandler} {backBtn} />
<main>
  {#if page === "url"}
    <Url {jwtToken} />
  {:else if jwtToken === ""}
    <Auth bind:jwtToken />
  {:else}
    <Data {jwtToken} />
  {/if}
</main>

<style>
</style>
