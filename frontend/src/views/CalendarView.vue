<template>
  <div class="CalendarPage">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "CalendarPage",
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
.CalendarPage * {
  box-sizing: border-box;
}
.CalendarPage {
  width: 390px;
  height: 844px;
  background: rgb(223, 223, 223);
  position: sticky;
}
::-webkit-scrollbar {
  display: none;
}
</style>
