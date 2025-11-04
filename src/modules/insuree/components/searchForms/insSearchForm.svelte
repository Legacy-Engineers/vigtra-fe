<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { loadInsurees } from '../../loaders';
  import { queriedInsurees } from '../../stores';
  import type { InsureeGqlSearchForm } from '../../types';

  let form = $state<InsureeGqlSearchForm>({
    offset: 0,
    after: '0',
    before: '0',
    chfId: '',
  });

  async function searchInsuree() {
    await loadInsurees(form);
  }
</script>

<Card.Root>
  <Card.Header>
    <Card.Title
      >Search for an insuree - Total Insurees: {$queriedInsurees.length}</Card.Title
    >
    <Card.Description
      >Search for an insuree ny using the available search options</Card.Description
    >
    <Card.Content>
      <Input
        bind:value={form.chfId}
        type="text"
        placeholder="CHFID Number"
        class="max-w-lg"
      />
    </Card.Content>
    <Card.Footer>
      <Button onclick={searchInsuree} variant="outline">Search</Button>
    </Card.Footer>
  </Card.Header>
</Card.Root>
