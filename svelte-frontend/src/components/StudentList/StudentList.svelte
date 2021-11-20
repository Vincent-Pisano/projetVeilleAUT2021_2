<script>
  import StudentItem from "./StudentItem.svelte";

  export let title;
  export let students;
  export let errorMessage;
</script>

<div class="container cont_principal">
  <div class="container cont_list_centrar">
    <h2 class="cont_title_form">{title}</h2>
    <div class="container">
      <p
        style={errorMessage.startsWith("Erreur")
          ? "color:red;"
          : "color:green;"}
      >
        {errorMessage}
      </p>
      {#each students as student}
        <StudentItem {student} on:click/>
      {/each}
    </div>
  </div>
</div>

<style>
  .cont_principal {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    color: white;
  }

  .cont_list_centrar {
    padding: 2%;
    background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
    border-radius: 8px;
    transition: all 0.5s;
    min-width: 50%;
  }

  .cont_title_form {
    width: 100%;
    box-shadow: none !important;
    color: rgba(255, 64, 88, 0.74);
  }
</style>
