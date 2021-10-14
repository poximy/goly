<script lang="ts">
  import Url from "./components/url/Url.svelte";
  import Nav from "./components/nav/Nav.svelte";

  import Auth from "./components/auth/Auth.svelte";
  import Data from "./components/data/Data.svelte";

  import { token } from "./stores";

  let page: page = "url";
  let backBtn = false;

  const pageHandler = () => {
    if (backBtn) {
      page = "url";
      backBtn = false;
    } else if ($token === "") {
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
    <Url />
  {:else if $token === ""}
    <Auth />
  {:else}
    <Data />
  {/if}
</main>

<style>
</style>
