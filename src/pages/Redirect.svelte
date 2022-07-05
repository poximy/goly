<script>
  import { meta } from 'tinro';

  const route = meta();
  const apiUrl = import.meta.env.VITE_API_URL;

  (async function redirect() {
    const res = await fetch(apiUrl + '/' + route.params.id, {
      method: 'GET',
      redirect: 'manual',
    });

    window.location.replace(res.url);
  })();
</script>

<div class="flex h-screen w-full items-center justify-center">
  <p class="font-mono text-4xl text-white">Redirecting...</p>
</div>
