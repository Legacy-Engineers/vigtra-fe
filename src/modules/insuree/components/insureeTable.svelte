<script lang="ts">

  let  { insureeList=[]  } = $props();
</script>


{#if insureeList}
    {#each insureeList as item }
	{item}
    {/each}

{/if}
