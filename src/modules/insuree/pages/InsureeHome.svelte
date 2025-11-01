<script>
    import { onMount } from "svelte";
    import { fetchInsurees } from "../services";


  onMount(async () => {
    const insureeData = await fetchInsurees();
    console.log(insureeData)
  })
</script>

welcome to the insuree home page
