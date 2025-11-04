<script lang="ts">
  import { activeInsureeTab } from '../stores';
  import InsSearchForm from './searchForms/insSearchForm.svelte';
</script>

{#if $activeInsureeTab === 'ins'}
  <InsSearchForm />
{/if}
