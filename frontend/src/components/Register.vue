<template>
  <div class="Register">
    <div class="background-box">
      <WorkList></WorkList>
      <button class="Work-Add">ADD FITNESS</button>
    </div>
  </div>
</template>

<script>
import WorkList from '../components/WorkList.vue';

export default {
  components: {
    WorkList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap');
.Register {
  width: 390px;
  top: 240px;
  bottom: 5rem;
  position: fixed;
  overflow-y: scroll;
}
.background-box {
  position: relative;
}
::-webkit-scrollbar {
  display: none;
}
.Work-Add {
  position: relative;
  background: rgba(76, 106, 255, 0.2);
  width: 270px;
  height: 60px;
  left: 60px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 38, 255, 0.7);
}
</style>
