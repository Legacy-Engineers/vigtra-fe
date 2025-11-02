<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";

</script>

<Card.Root class="@container/card">
  <Card.Header>
    <Card.Description>Total Revenue</Card.Description>
    <Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
      $1,250.00
    </Card.Title>
    <Card.Action>

    </Card.Action>
  </Card.Header>
  <Card.Footer class="flex-col items-start gap-1.5 text-sm">
    <div class="line-clamp-1 flex gap-2 font-medium">
      Trending up this month
    </div>
    <div class="text-muted-foreground">Visitors for the last 6 months</div>
  </Card.Footer>
</Card.Root>
