<script lang="ts">
  import Url from "./components/url/Url.svelte";
  import Nav from "./components/nav/Nav.svelte";

  import Auth from "./components/auth/Auth.svelte";

  let jwtToken: string = "";
  let page: page = "url";
  let backBtn = false;

  const pageHandler = () => {
    if (backBtn) {
      page = "url";
      backBtn = false
    } else if (jwtToken === "") {
      page = "auth";
      backBtn = true;
    } else {
      page = "metadata";
      backBtn = true;
    }
  };

  const tokenHandler = (token: string) => {
    jwtToken = token;
  };
</script>

<Nav urls={pageHandler} {backBtn} />
<main>
  {#if page === "url"}
    <Url />
  {:else if jwtToken === ""}
    <Auth {tokenHandler} />
  {:else}
    <p>metadata</p>
  {/if}
</main>

<style>
</style>
