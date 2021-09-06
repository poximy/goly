<script lang="ts">
  export let miniUrl: (url: string) => void;

  import { minifyUrl } from "@api/url";

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
  form {
    margin: 25vh 0 3em 0;
    display: flex;
    justify-content: center;
  }

  input {
    font-size: 1.25em;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 0.5em 0 0 0.5em;
    padding: 0 0.5em;
    font-family: "Play", sans-serif;
    background-color: #e6e8e8;
  }

  input::placeholder {
    font-size: 1.25em;
    text-align: center;
  }

  button {
    border: none;
    font-size: 1.5em;
    padding: 0.25em 0.375em;
    border-radius: 0 0.5em 0.5em 0;
  }
</style>
