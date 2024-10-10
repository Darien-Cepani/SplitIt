<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import BillManager from './components/BillManager.svelte';
  import { darkMode } from './stores';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      darkMode.set(true);
    }
  });

  $: if ($darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
</script>

<Navbar />
<main class="container mx-auto px-4 py-8">
  <BillManager />
</main>