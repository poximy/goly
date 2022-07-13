<script>
  import { Route } from 'tinro';

  import Nav from '@components/Nav.svelte';
  import Footer from '@components/Footer.svelte'
  import Error from '@components/Error.svelte';
  import Index from '@pages/Index.svelte';
  import Redirect from '@pages/Redirect.svelte';
</script>

<Error />

<Route path="/">
  <Nav />
  <Index />
  <Footer />
</Route>

<Route path="/:id">
  <Redirect />
</Route>
