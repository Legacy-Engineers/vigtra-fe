<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import type { InsureeGqlItem, insureeStatusType } from '../../types';
  import InsureeInfoText from '../insureeInfoText.svelte';
  let { insuree }: { insuree: InsureeGqlItem } = $props();

  function getStatusLabel(status: insureeStatusType) {
    switch (status) {
      case 'AC':
        return 'Active';
      case 'IN':
        return 'Inactive';
      case 'DE':
        return 'Deceased';
      case 'SU':
        return 'Suspended';
      case 'PE':
        return 'Pending';
      default:
        return 'Unknown';
    }
  }
</script>

<Card.Root
  class="w-full mx-auto border border-border bg-card/70 backdrop-blur-sm shadow-sm rounded-xl transition hover:shadow-md"
>
  <Card.Header class="pb-4 border-b border-border/60">
    <Card.Title class="text-xl font-semibold text-foreground">
      General Information
    </Card.Title>
    <Card.Description class="text-sm text-muted-foreground mt-1">
      A full view of the insuree's general information
    </Card.Description>
  </Card.Header>

  <Card.Content class="pt-6">
    <div class="flex gap-8">
      <!-- Photo Section -->
      <div class="shrink-0">
        {#if insuree.photo}
          <img
            src={insuree.photo}
            alt="Insuree profile"
            class="w-24 h-24 rounded-lg object-cover border-2 border-border shadow-sm"
          />
        {:else}
          <div
            class="w-24 h-24 rounded-lg bg-muted border-2 border-border flex items-center justify-center"
          >
            <span class="text-xs text-muted-foreground text-center px-2"
              >No photo</span
            >
          </div>
        {/if}
      </div>

      <!-- Information Grid -->
      <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
        <InsureeInfoText label="CHF ID" value={insuree.chfId} />
        <InsureeInfoText label="Full Name" value={insuree.fullName} />
        <InsureeInfoText label="Last Name" value={insuree.lastName} />
        <InsureeInfoText label="Other Names" value={insuree.otherNames} />
        <InsureeInfoText
          label="Date of Birth"
          value={new Date(insuree.dob).toLocaleDateString()}
        />
        <InsureeInfoText
          label="Age"
          value={`${insuree.age.toString()} years`}
        />
        <InsureeInfoText label="Email" value={insuree.email} />
        <InsureeInfoText label="Phone" value={insuree.phone} />
        <InsureeInfoText label="Profession" value={insuree.professionName} />
        <InsureeInfoText
          label="Marital Status"
          value={insuree.mariatialStatus}
        />
        <InsureeInfoText label="Passport" value={insuree.passport} />

        <InsureeInfoText
          label="Status"
          value={getStatusLabel(insuree.status)}
          valueColor={insuree.status === 'AC'
            ? 'text-green-500'
            : insuree.status === 'IN'
              ? 'text-red-500'
              : insuree.status === 'DE'
                ? 'text-gray-500'
                : insuree.status === 'SU'
                  ? 'text-yellow-500'
                  : 'text-blue-500'}
        />
        <InsureeInfoText
          label="Validity From"
          value={new Date(insuree.validityFrom).toLocaleDateString()}
        />
        <InsureeInfoText
          label="Validity To"
          value={insuree.validityTo
            ? new Date(insuree.validityTo).toLocaleDateString()
            : ''}
        />
      </div>
    </div>
  </Card.Content>
</Card.Root>
