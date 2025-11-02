<script lang="ts">
 import * as Tabs from "$lib/components/ui/tabs/index.js";
    import InsureeTable from "./insureeTable.svelte";
</script>

<Tabs.Root value="insurees" class="w-full">
 <Tabs.List class="w-full">
  <Tabs.Trigger value="insurees">Insurees</Tabs.Trigger>
  <Tabs.Trigger value="families">Families</Tabs.Trigger>
  <Tabs.Trigger value="policies">Policies</Tabs.Trigger>
  <Tabs.Trigger value="contributions">Contributions</Tabs.Trigger>
 </Tabs.List>
 <Tabs.Content value="insurees"  class="w-full">
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
