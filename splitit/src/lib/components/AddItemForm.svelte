<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { users } from '../../stores/store';
  
    const dispatch = createEventDispatcher();
  
    let name = '';
    let price = 0;
    let quantity = 1;
    let assignedTo = [];
  
    function handleSubmit() {
      if (name && price > 0 && quantity > 0) {
        dispatch('addItem', { name, price, quantity, assignedTo });
        name = '';
        price = 0;
        quantity = 1;
        assignedTo = [];
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div>
      <label for="name" class="block mb-1">Item Name</label>
      <input id="name" type="text" bind:value={name} required class="input w-full" />
    </div>
    <div>
      <label for="price" class="block mb-1">Price</label>
      <input id="price" type="number" bind:value={price} min="0" step="0.01" required class="input w-full" />
    </div>
    <div>
      <label for="quantity" class="block mb-1">Quantity</label>
      <input id="quantity" type="number" bind:value={quantity} min="1" required class="input w-full" />
    </div>
    <div>
      <label class="block mb-1">Assign To</label>
      {#each $users as user}
        <label class="inline-flex items-center mr-4">
          <input type="checkbox" bind:group={assignedTo} value={user.id} class="form-checkbox" />
          <span class="ml-2">{user.name}</span>
        </label>
      {/each}
    </div>
    <button type="submit" class="btn btn-primary w-full">Add Item</button>
  </form>