<script>
  import { Route } from 'tinro';

  import Nav from '@components/Nav.svelte';
  import Error from '@components/Error.svelte';
  import Index from '@pages/Index.svelte';
</script>

<Nav />
<Error />

<Route path="/">
  <Index />
</Route>

<Route path="/login">
  <p>login</p>
</Route>

<Route path="/signup">
  <p>signup</p>
</Route>
