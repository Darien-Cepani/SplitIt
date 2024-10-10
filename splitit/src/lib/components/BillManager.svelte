<script lang="ts">
    import { Fa } from 'svelte-fa';
    import { faPlus, faFileDownload } from '@fortawesome/free-solid-svg-icons';
    import AddItemForm from './AddItemForm.svelte';
    import ItemList from './ItemList.svelte';
    import UserList from './UserList.svelte';
    import { items, users } from '../../stores/store';
    import { generatePDF } from '../../utils/pdfGenerator';
  
    let showAddItemForm = false;
  
    function toggleAddItemForm() {
      showAddItemForm = !showAddItemForm;
    }
  
    function handleAddItem(event) {
      const newItem = event.detail;
      items.update(items => [...items, newItem]);
      showAddItemForm = false;
    }
  
    function handleDownloadPDF() {
      generatePDF($items, $users);
    }
  </script>
  
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">Bill Manager</h1>
      <div class="space-x-2">
        <button on:click={toggleAddItemForm} class="btn btn-primary">
          <Fa icon={faPlus} class="mr-2" />
          Add Item
        </button>
        <button on:click={handleDownloadPDF} class="btn btn-secondary">
          <Fa icon={faFileDownload} class="mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  
    {#if showAddItemForm}
      <AddItemForm on:addItem={handleAddItem} />
    {/if}
  
    <ItemList />
    <UserList />
  </div>