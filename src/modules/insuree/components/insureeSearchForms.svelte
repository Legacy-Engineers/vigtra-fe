<script lang="ts">
  import { activeInsureeTab } from '../stores';
    import FamSearchForm from './searchForms/famSearchForm.svelte';
  import InsSearchForm from './searchForms/insSearchForm.svelte';
</script>

{#if $activeInsureeTab === 'ins'}
  <InsSearchForm />
{:else if $activeInsureeTab === "fam"}
    <FamSearchForm />
{/if}
