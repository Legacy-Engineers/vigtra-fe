<script lang="ts">
  import type { InsureeGqlItem } from '../../types';
  import * as Card from '$lib/components/ui/card/index.js';
  import NoDataFound from '../../../core/components/noDataFound.svelte';

  let { insuree }: { insuree: InsureeGqlItem } = $props();
  console.log($inspect(insuree.identifications));
</script>

<Card.Root
  class="w-full mx-auto border border-border bg-card/70 backdrop-blur-sm shadow-sm rounded-xl transition hover:shadow-md"
>
  <Card.Header class="pb-4 border-b border-border/60">
    <Card.Title class="text-xl font-semibold text-foreground">
      Identification Information
    </Card.Title>
    <Card.Description class="text-sm text-muted-foreground mt-1">
      A full view of the insuree's identification information
    </Card.Description>
  </Card.Header>
  <Card.Content class="pt-6">
    <div class="flex gap-8">
      {#if insuree.identifications && insuree.identifications.length > 0}
        {#each insuree.identifications || [] as identification}
          <div class="flex gap-2">
            <span class="text-sm text-muted-foreground">
              {identification.identificationType.name}
            </span>
            <span class="text-sm text-foreground">
              {identification.identificationNumber}
            </span>
          </div>
        {/each}
      {:else}
        <NoDataFound message="No identification information found" />
      {/if}
    </div>
  </Card.Content>
</Card.Root>
