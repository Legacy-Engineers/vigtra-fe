<script lang="ts">
  import Icon from '@iconify/svelte';

  let { message = 'No data found' }: { message?: string } = $props();
</script>

<div
  class="text-sm text-muted-foreground w-full flex items-center justify-center"
>
  <span
    class="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-col"
  >
    <Icon icon="mdi:information-outline" class="w-20 h-20" />
    {message}
  </span>
</div>
