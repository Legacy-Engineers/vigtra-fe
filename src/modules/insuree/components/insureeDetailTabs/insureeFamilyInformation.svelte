<script lang="ts">
  import type { InsureeGqlItem } from '../../types';
  import * as Card from '$lib/components/ui/card/index.js';
  import NoDataFound from '../../../core/components/noDataFound.svelte';
  import InsureeInfoText from '../insureeInfoText.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { EyeIcon } from '@lucide/svelte';
  import { push } from 'svelte-spa-router';

  let { insuree }: { insuree: InsureeGqlItem } = $props();
</script>

<Card.Root
  class="w-full mx-auto border border-border bg-card/70 backdrop-blur-sm shadow-sm rounded-xl transition hover:shadow-md"
>
  <Card.Header class="pb-4 border-b border-border/60">
    <Card.Title class="text-xl font-semibold text-foreground">
      Family Information
    </Card.Title>
    <Card.Description class="text-sm text-muted-foreground mt-1">
      A full view of the insuree's family information
    </Card.Description>
  </Card.Header>
  <Card.Content class="pt-6">
    <div class="flex gap-8">
      {#if insuree.familyMemberships && insuree.familyMemberships.edges && insuree.familyMemberships.edges.length > 0}
        <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {#each insuree.familyMemberships.edges as edge}
            <div class="flex flex-row items-center justify-between gap-2">
              <InsureeInfoText
                label="Family Name"
                value={edge.node.familyName}
              />
              <InsureeInfoText
                label="Has Claim Benefits"
                value={edge.node.hasClaimBenefits ? 'Yes' : 'No'}
              />
              <InsureeInfoText
                label="Is Head"
                value={edge.node.isHead ? 'Yes' : 'No'}
              />
              <InsureeInfoText
                label="Is Head"
                value={edge.node.isHead ? 'Yes' : 'No'}
              />
              <Button
                onclick={() => {
                  push(`/insuree/families/${edge.node.family.uuid}/detail`);
                }}
                variant="outline"
                size="sm"
              >
                <EyeIcon class="w-4 h-4" />
                View Family Information
              </Button>
            </div>
          {/each}
        </div>
      {:else}
        <div class="w-full flex items-center justify-center">
          <NoDataFound message="No family memberships found" />
        </div>
      {/if}
    </div>
  </Card.Content>
</Card.Root>
