<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import { activeInsureeTab } from '../stores';
  import InsureeTable from './insureeTable.svelte';
</script>

<Tabs.Root value="insurees" class="w-full">
  <Tabs.List class="w-full">
    <Tabs.Trigger
      value="insurees"
      onclick={() => {
        activeInsureeTab.set('ins');
      }}>Insurees</Tabs.Trigger
    >
    <Tabs.Trigger
      value="families"
      onclick={() => {
        activeInsureeTab.set('fam');
      }}>Families</Tabs.Trigger
    >
    <Tabs.Trigger
      value="policies"
      onclick={() => {
        activeInsureeTab.set('pol');
      }}>Policies</Tabs.Trigger
    >
    <Tabs.Trigger
      value="contributions"
      onclick={() => {
        activeInsureeTab.set('con');
      }}>Contributions</Tabs.Trigger
    >
  </Tabs.List>
  <Tabs.Content value="insurees" class="w-full">
    <InsureeTable />
  </Tabs.Content>
  <Tabs.Content value="families">Change your password here.</Tabs.Content>
  <Tabs.Content value="account" class="w-full">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="policies" class="w-full">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="contributions" class="w-full">
    Make changes to your account here.
  </Tabs.Content>
</Tabs.Root>
