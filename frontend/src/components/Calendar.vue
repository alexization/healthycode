<template>
  <div class="Calendar">
    <div class="calendar-box">Calendar</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.Calendar {
  width: 390px;
  height: 110px;
  top: 110px;
  position: fixed;
}
.calendar-box {
  background: rgb(255, 255, 255);
  width: 390px;
  height: 110px;
  box-shadow: 0px 3px 3px 0px rgba(0, 38, 255, 0.1);
  position: absolute;
  text-align: center;
}
</style>
