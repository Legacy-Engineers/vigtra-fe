<script lang="ts">
  let {
    label,
    value = '',
    valueColor = 'text-foreground',
  }: { label: string; value?: string; valueColor?: string } = $props();
</script>

<div class="space-y-1">
  <div
    class="text-xs font-medium text-muted-foreground uppercase tracking-wide"
  >
    {label}
  </div>
  <div
    class={value
      ? `text-lg font-medium ${valueColor}`
      : 'text-lg font-medium text-muted-foreground'}
  >
    {value || 'N/A'}
  </div>
</div>
