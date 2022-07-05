<script>
  import { Route } from 'tinro';

  import Nav from '@components/Nav.svelte';
  import Error from '@components/Error.svelte';
  import Index from '@pages/Index.svelte';
  import Redirect from '@pages/Redirect.svelte';
</script>

<Error />

<Route path="/">
  <Nav />
  <Index />
</Route>

<Route path="/:id">
  <Redirect />
</Route>
