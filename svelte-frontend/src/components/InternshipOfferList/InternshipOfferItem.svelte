<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from "svelte-awesome";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  
    const dispatch = createEventDispatcher();
  
    export let internshipOffer;
  </script>
  
  <div class="row list_node" on:click={() => dispatch('click', internshipOffer)}>
    <div class="col-sm-3">
      <Icon data={faEnvelope} style="width:30%;height:30%" />
    </div>
    <div class="col-sm-9 list_node_text">
        <li>
            {" "}
            {internshipOffer.jobName}, {internshipOffer.city}{" "}
          </li>
    </div>
  </div>
  
  <style>
    .list_node {
      background: rgba(255, 64, 88, 0.74);
      box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5);
      border-radius: 8px;
      padding: 15px 30px;
      border: none;
      color: #fff;
      font-size: 14px;
      position: relative;
      cursor: pointer;
      margin-bottom: 25px;
      align-items: center;
    }
  
    .list_node_text {
        font-size: 1.25rem;
        list-style-type: none;
    }
  </style>
  