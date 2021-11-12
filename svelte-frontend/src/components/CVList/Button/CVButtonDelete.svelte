<script>
    import CVModalConfirmDelete from "../Modal/CVModalConfirmDelete.svelte";

    export let cv;
    let isOpen = false;
</script>

<button
  class="btn btn-danger btn-sm"
  type="button"
  on:click={() => (isOpen = !isOpen)}
>
  Supprimer
</button>

<CVModalConfirmDelete {isOpen} {cv}/>

<style>
    
</style>