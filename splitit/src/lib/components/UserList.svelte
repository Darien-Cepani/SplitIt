<script lang="ts">
    import { Fa } from 'svelte-fa';
    import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
    import { users, items } from '../../stores/store';
  
    let newUserName = '';
  
    function addUser() {
      if (newUserName) {
        users.update(users => [...users, { id: Date.now().toString(), name: newUserName }]);
        newUserName = '';
      }
    }
  
    function removeUser(id) {
      users.update(users => users.filter(user => user.id !== id));
      items.update(items => items.map(item => ({
        ...item,
        assignedTo: item.assignedTo.filter(userId => userId !== id)
      })));
    }
  
    function calculateUserTotal(userId) {
      return $items
        .filter(item => item.assignedTo.includes(userId))
        .reduce((total, item) => total + (item.price * item.quantity) / item.assignedTo.length, 0);
    }
  </script>
  
  <div class="space-y-4">
    <h2 class="text-2xl font-bold">Users</h2>
    <div class="flex space-x-2">
      <input
        type="text"
        bind:value={newUserName}
        placeholder="Enter user name"
        class="input flex-grow"
      />
      <button on:click={addUser} class="btn btn-primary">
        <Fa icon={faPlus} class="mr-2" />
        Add User
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each $users as user (user.id)}
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-semibold">{user.name}</h3>
            <button on:click={() => removeUser(user.id)} class="text-red-500 hover:text-red-700">
              <Fa icon={faTrash} />
            </button>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Total: ${calculateUserTotal(user.id).toFixed(2)}
          </p>
        </div>
      {/each}
    </div>
  </div>