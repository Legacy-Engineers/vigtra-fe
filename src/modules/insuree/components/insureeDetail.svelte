<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchInsureeDetail } from '../services';
  import type { InsureeGqlItem } from '../types';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import InsureeGeneralInfo from './insureeDetailTabs/insureeGeneralInfo.svelte';
  import InsureeIdentificationInfo from './insureeDetailTabs/insureeIdentificationInfo.svelte';
  import InsureeFamilyInformation from './insureeDetailTabs/insureeFamilyInformation.svelte';
  import InsureeLocationInfor from './insureeDetailTabs/insureeLocationInfor.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { PencilIcon } from '@lucide/svelte';
  import { push } from 'svelte-spa-router';

  let { params }: { params: { uuid: string } } = $props();

  let insuree = $state<InsureeGqlItem | null>(null);

  onMount(async () => {
    try {
      insuree = await fetchInsureeDetail(params.uuid);
    } catch (error) {
      console.error(error);
    }
  });
</script>

{#if insuree}
  <div>
    <Card.Root>
      <Card.Header class="flex justify-between items-center">
        <div>
          <Card.Title>Insuree Detail</Card.Title>
          <Card.Description
            >A full view of the insuree's details</Card.Description
          >
        </div>
        <div>
          <Button
            variant="outline"
            size="sm"
            onclick={() => {
              push(`/insuree/${insuree?.uuid}/edit`);
            }}
          >
            <PencilIcon class="w-4 h-4" />
            Edit Insuree
          </Button>
        </div>
      </Card.Header>
    </Card.Root>

    <Tabs.Root value="general" class="w-full mt-4">
      <Tabs.List class="w-full">
        <Tabs.Trigger value="general">General Information</Tabs.Trigger>
        <Tabs.Trigger value="contact">Identification Information</Tabs.Trigger>
        <Tabs.Trigger value="family">Family Information</Tabs.Trigger>
        <Tabs.Trigger value="location">Location Information</Tabs.Trigger>
        <Tabs.Trigger value="formalsector"
          >Formal Sector Information</Tabs.Trigger
        >
      </Tabs.List>
      <Tabs.Content value="general" class="w-full">
        <InsureeGeneralInfo {insuree} />
      </Tabs.Content>
      <Tabs.Content value="contact" class="w-full">
        <InsureeIdentificationInfo {insuree} />
      </Tabs.Content>
      <Tabs.Content value="family" class="w-full">
        <InsureeFamilyInformation {insuree} />
      </Tabs.Content>
      <Tabs.Content value="location" class="w-full">
        <InsureeLocationInfor {insuree} />
      </Tabs.Content>
      <Tabs.Content value="formalsector" class="w-full">
        <!-- <InsureeFormalSectorInformation {insuree} /> -->
        Formal Sector Information
      </Tabs.Content>
    </Tabs.Root>
  </div>
{:else}
  <div>
    <h1>Insuree Detail</h1>
    <p>No insuree found</p>
  </div>
{/if}
