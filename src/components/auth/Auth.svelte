<script lang="ts">
</script>

<div class="auth">
  <form on:submit|preventDefault={() => console.log("btn")}>
    <div class="field">
      <input type="text" class="input" placeholder="@user" />
    </div>
    <div class="field">
      <input type="password" class="input" placeholder="Password" />
    </div>
    <button type="submit">LOGIN</button>
  </form>
</div>

<style>
  .auth {
    display: flex;
    justify-content: center;
    font-size: 1.25em;
    box-sizing: border-box;
    margin-top: 10vh;
    padding: 8px;
  }

  form {
    --text-color: #1f1f1f;
    max-width: 25em;
  }
  .field {
    width: 100%;
    position: relative;
    border-bottom: 0.25em dashed var(--text-color);
    margin: 4rem auto 1rem;
  }
  .input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem;
    background: none;
    font-size: 1.25em;
    font-weight: bold;
    color: #e6e8e8;
    font-family: "Play", sans-serif;
  }

  input:focus {
    border-radius: 0.5em;
    color: #e6e8e8;
  }

  /* Border animation */
  .field::after {
    content: "";
    position: relative;
    display: block;
    height: 0.25em;
    width: 100%;
    background: #248f8f;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 500ms ease;
    top: 0.25em;
  }
  .field:focus-within {
    border-color: transparent;
  }
  .field:focus-within::after {
    transform: scaleX(1);
  }

  button {
    display: block;
    margin: 1.5em auto;
    border: none;
    font-size: 1em;
    padding: 0.5em;
    border-radius: 0.5em;
  }
</style>
