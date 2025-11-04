<script lang="ts">
  import type { InsureeGqlItem } from '../../types';
  import * as Card from '$lib/components/ui/card/index.js';
  import InsureeInfoText from '../insureeInfoText.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { MapPinIcon } from '@lucide/svelte';
  import { push } from 'svelte-spa-router';

  let { insuree }: { insuree: InsureeGqlItem } = $props();
</script>

<Card.Root
  class="w-full mx-auto border border-border bg-card/70 backdrop-blur-sm shadow-sm rounded-xl transition hover:shadow-md"
>
  <Card.Header class="pb-4 border-b border-border/60">
    <Card.Title class="text-xl font-semibold text-foreground">
      Location Information
    </Card.Title>
    <Card.Description class="text-sm text-muted-foreground mt-1">
      A full view of the insuree's location information
    </Card.Description>
  </Card.Header>
  <Card.Content class="pt-6 flex flex-col gap-4">
    <div class="flex justify-between">
      <InsureeInfoText label="Location" value={insuree.location.name} />
      <InsureeInfoText
        label="Location Type"
        value={insuree.location.type?.name}
      />
      <InsureeInfoText
        label="Location Level"
        value={insuree.location.type?.level.toString()}
      />
      <InsureeInfoText label="Current Address" value={insuree.currentAddress} />
    </div>
    <Button
      variant="outline"
      size="sm"
      onclick={() => {
        push(`/location/${insuree.location}/detail`);
      }}
    >
      <MapPinIcon class="w-4 h-4" />
      View Location Details
    </Button>
  </Card.Content>
</Card.Root>
