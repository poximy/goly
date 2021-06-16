<script lang="ts">
  export let miniUrl: (url: string) => void;

  import minifyUrl from "@api/url";

  let urlInputText = "";

  const formSubmit = async () => {
    if (!urlInputText) {
      alert("Insert URL");
      return;
    }

    const newUrl = await minifyUrl(urlInputText);
    if (newUrl !== null) {
      miniUrl(newUrl);
      urlInputText = "";
    }
  };
</script>

<form on:submit|preventDefault={formSubmit}>
  <input type="text" placeholder="Insert Url" bind:value={urlInputText} />
  <button type="submit">Minify</button>
</form>

<style>
</style>
