<script>
    import CVModalConfirmActive from "../Modal/CVModalConfirmActive.svelte";

    export let cv;
    let isOpen = false;
</script>

<button
  class="btn btn-warning btn-sm"
  type="button"
  disabled={cv.isActive}
  on:click={() => (isOpen = !isOpen)}
>
  {cv.isActive ? "Déjà Actif" : "Mettre Actif"}
</button>

<CVModalConfirmActive {isOpen} {cv}/>

<style>
    
</style>