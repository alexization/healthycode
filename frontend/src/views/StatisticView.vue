<template>
  <div class="MainPage">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainPage",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style>
.MainPage * {
  box-sizing: border-box;
}
.MainPage {
  width: 390px;
  height: 844px;
  background: rgb(223, 223, 223);
  position: sticky;
}
::-webkit-scrollbar {
  display: none;
}
</style>
