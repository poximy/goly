<script lang="ts">
  export let jwtToken: string;

  import data from "@api/data";
  import { deleteUrl } from "@api/url";

  let urlData: Metadata[] = [];

  const metadata = async () => {
    const urls = await data(jwtToken);
    if (urls !== null) {
      urlData = urls;
    }
  };

  const delUrl = async (id: string) => {
    await deleteUrl(jwtToken, id);
    metadata();
  };

  $: metadata();
</script>

<div>
  <ul>
    <!--  TODO Add append & delete btn  -->
    {#each urlData as url}
      <li class="card">
        <div>
          <p class="click">{url.clicks}</p>
          <p style="text-align: center;">clicks</p>
        </div>
        <div>
          <p>created: {url.created}</p>
          <p>
            mini: {env["API_URL"]}/{url._id}
            <button
              on:click={() =>
                navigator.clipboard.writeText(
                  `${window.location.origin}/${url._id}`
                )}>copy</button
            >
          </p>
          <p>origin: {url.url}</p>
          <button class="delete" on:click={async () => await delUrl(url._id)}
            >Delete</button
          >
        </div>
      </li>
    {:else}
      <p class="empty">NO URLS :(</p>
    {/each}
  </ul>
</div>

<style>
  .delete {
    margin: auto;
    margin-top: 0.5em;
    padding: 0.25em;
    font-size: 1em;
    display: block;
    background-color: red;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
  }

  li {
    background-color: #248f8f;
    border-radius: 1.5em;
    box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    margin: 1em 0.5em;
    padding: 0.5em;
  }

  li div {
    padding: 0.5em;
  }

  button {
    display: inline-block;
    padding: 0.1em;
    border: 0.25em solid black;
    border-radius: 0.25em;
  }

  .click {
    font-size: 7.5em;
  }

  p {
    color: #e6e8e8;
    font-size: 1em;
    font-family: "Play", sans-serif;
  }

  .empty {
    font-size: 2.5em;
  }
</style>
