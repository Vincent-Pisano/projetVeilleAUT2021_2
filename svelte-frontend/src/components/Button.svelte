<script>
  import { createEventDispatcher } from "svelte";
  export let style = "";
  export let type = "button";
  export let disabled = false;

  const dispatch = createEventDispatcher();

  const handleclick = () => {
    dispatch("handle-submit");
  };
</script>

<button class={style} {type} {disabled} on:click={() => handleclick()}>Submit</button>

<style>
  .btn_submit {
    background: rgba(255, 64, 88, 0.74);
    box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5);
    border-radius: 8px;
    padding: 15px 30px;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }

  button:disabled {
    background: rgba(214, 47, 70, 0.74) !important; 
    cursor: wait;
  }
</style>
