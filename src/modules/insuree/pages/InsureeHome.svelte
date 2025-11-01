<script>
    import { onMount } from "svelte";
    import { fetchInsurees } from "../services";

    let insureeList = $state('Hello');

  onMount(async () => {
    const insureeData = await fetchInsurees();
    // insureeList = insureeData
  })
</script>

welcome to the insuree home page
{insureeList}
