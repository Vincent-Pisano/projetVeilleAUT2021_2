<script>
    import Button from "../../Button.svelte";
    import CVModalDeposit from "../Modal/CVModalDeposit.svelte";

    let isOpen = false;
</script>

<Button
  style="btn_link"
  type="submit"
  on:handle-click={() => (isOpen = !isOpen)}
>
  Déposer un CV
</Button>

<CVModalDeposit {isOpen}/>