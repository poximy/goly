<script lang="ts">
  import { token } from "../../stores"
  import { auth, register } from "@api/auth";

  // authentication variables
  let user: string = "";
  let password: string = "";
  let loginError = false;

  // registration variables
  let login = true;
  let confirmPassword = "";

  const fromHandler = async () => {
    if (!login && (password === confirmPassword)) {
       const res = await register(user, password)
       if (res === null || res === false){
         loginError = true
         return
       }
    }

    const res = await auth(user, password);
    if (res !== null && res.access_token) {
      let jwtToken = res.access_token;
      token.update(value => value = jwtToken)

      user = "";
      password = "";
      loginError = false;
    } else {
      loginError = true;
      password = "";
    }
  };

</script>

<div class="action">
  <button class="register" on:click={() => login = false}>Register</button>
  <button class="login" on:click={() => login = true}>Login</button>
</div>

<div class="auth">
  <form on:submit|preventDefault={fromHandler}>
    <div class="field">
      <input
        type="text"
        class="input"
        placeholder="@username"
        bind:value={user}
      />
    </div>
    <div class="field">
      <input
        type="password"
        class="input"
        placeholder="Password"
        bind:value={password}
      />
    </div>
    {#if !login}
      <div class="field">
        <input
                type="password"
                class="input"
                placeholder="Confirm Password"
                bind:value={confirmPassword}
        />
      </div>
    {/if}
    <button type="submit">LOGIN</button>
    {#if loginError}
      <p>Incorrect username or password</p>
    {/if}
  </form>
</div>

<style>
  .action {
    display: flex;
    justify-content: center;
  }

  .action button {
    font-size: 1.25em;
    margin: 0;
  }

  .register {
    border-radius: 0.5em 0 0 0.5em;
  }

  .login {
    border-left: 1px solid black;
    border-radius: 0 0.5em 0.5em 0;
  }

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
    transform-origin: 0;
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

  p {
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-size: 1em;
    color: red;
  }
</style>
