<template>
  <div id="app">
    <header-main></header-main>
    <div style="min-height:60vh;">
      <router-view/>
    </div>
      
    <footer-dark></footer-dark>
   
  </div>
</template>


<script>

  import HeaderMain from "./components/layout/headerMain";
  import FooterDark from "./components/layout/FooterDark";

  
  export default {
    components: {HeaderMain, FooterDark},
  
  }

</script>
