<script lang="ts">
    import { Fa } from 'svelte-fa';
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
    import { darkMode } from '../../stores/store';
  
    function toggleDarkMode() {
      darkMode.update(n => !n);
    }
  </script>
  
  <nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <span class="font-bold text-xl text-primary-light dark:text-primary-dark">SplitIt</span>
        </div>
        <div>
          <button on:click={toggleDarkMode} class="btn btn-secondary">
            <Fa icon={$darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </div>
  </nav>