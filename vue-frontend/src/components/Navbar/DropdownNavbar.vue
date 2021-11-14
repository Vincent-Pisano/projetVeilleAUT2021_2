<template>
    <div class="menu-item">
  <p class="menu-item-title">Options</p>
  <ul>
      <li v-for="(url, index) in urls" :key="index">
        <router-link
          :class="'menu-item-button'"
            :to="{ path: url.link }"
        >
          {{url.name}}
        </router-link>
      </li>
  </ul>
</div>
</template>

<script>

export default {
  name: "Navbar",
  props: {
      urls: Array,
  }
};

</script>

<style>
  .menu-item {
    width: 250px;
    padding: 1%;
    float: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-item ul {
    margin-top: 5px;
    list-style-type: none;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    width: 100%;
    overflow: auto;
    z-index: 10;

    -webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
    -o-transition: height 1s ease;
    -ms-transition: height 1s ease;
    transition: height 0.75s ease;
  }

  .menu-item ul li{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-item-title {
    text-align: center;
    padding: 5px 20px 5px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 8px;
    border: none;
    margin: 0 15px 0 15px;
    display: block;
    width: 90%;
  }

  .menu-item-title {
    color: rgba(0, 0, 0, 0.55);
    background: rgb(240, 240, 240);
  }

  .menu-item:hover ul {
    height: 500%;
    overflow: auto;
  }

  .menu-item-button {
    background: rgb(240, 240, 240);
    box-shadow: 0px 2px 20px 2px rgba(151, 151, 151, 0.5);
    border-radius: 8px;
    padding: 15px 15px;
    border: none;
    color: rgba(0, 0, 0, 0.55);
    position: relative;
    cursor: pointer;
    margin-bottom: 15px;
    align-items: center;
    font-size: 16px;
    width: 90%;
    margin: 0 auto 0 -0.25rem;
    border-radius: 8px;
    text-decoration: none;
  }

  .menu-item-button-selected {
    background: rgb(200, 200, 200);
  }

  @media only screen and (max-width: 600px) {
    .menu-item {
      width: 80%;
    }

    .menu-item ul {
      padding-left: 10%;
    }

    .menu-item ul li router-link {
      font-size: 20px;
      width: 90%;
      margin-right: 0px;
      margin-top: 5px;
      padding: 5px;
    }
  }
</style>
