<script lang="ts">
    import { Fa } from 'svelte-fa';
    import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
    import { items, users } from '../../stores/store';
  
    function removeItem(id) {
      items.update(items => items.filter(item => item.id !== id));
    }
  
    function getUserNames(userIds) {
      return userIds.map(id => $users.find(user => user.id === id)?.name || 'Unknown').join(', ');
    }
  </script>
  
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="bg-gray-100 dark:bg-gray-700">
          <th class="px-4 py-2 text-left">Name</th>
          <th class="px-4 py-2 text-left">Price</th>
          <th class="px-4 py-2 text-left">Quantity</th>
          <th class="px-4 py-2 text-left">Assigned To</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each $items as item (item.id)}
          <tr class="border-t border-gray-200 dark:border-gray-700">
            <td class="px-4 py-2">{item.name}</td>
            <td class="px-4 py-2">${item.price.toFixed(2)}</td>
            <td class="px-4 py-2">{item.quantity}</td>
            <td class="px-4 py-2">{getUserNames(item.assignedTo)}</td>
            <td class="px-4 py-2">
              <button on:click={() => removeItem(item.id)} class="text-red-500 hover:text-red-700 mr-2">
                <Fa icon={faTrash} />
              </button>
              <button class="text-blue-500 hover:text-blue-700">
                <Fa icon={faEdit} />
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>