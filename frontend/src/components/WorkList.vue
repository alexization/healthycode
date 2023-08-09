<template>
  <div class="WorkList">
    <button class="workbox">
      <img class="work-img" :src="require(`@/assets/work/${workImg}.png`)" />
      <div class="work-name" v-text="workName"></div>
      <img class="info" :src="Info" />
    </button>
  </div>
</template>

<script>
import Info from "@/assets/icon/info.png";
export default {
  props: {
    workImg: {
      type: String,
      default: "running",
    },
    workName: {
      type: String,
      default: "Running",
    },
  },
  data() {
    return {
      Info,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=REM:wght@100;300;500;700&display=swap");
.WorkList {
  position: relative;
}
.workbox {
  margin-top: 10px;
  background: rgb(255, 255, 255);
  width: 380px;
  height: 110px;
  left: 5px;
  border-radius: 15px;
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
}
.workbox img[class="info"] {
  width: 24px;
  height: 24px;
  margin-bottom: 18px;
  margin-left: 250px;
}
.workbox img[class="work-img"] {
  width: 70px;
  height: 70px;
}
.work-name {
  position: absolute;
  left: 110px;
  bottom: 70px;
  font-family: "REM", sans-serif;
  font-weight: 500;
  font-size: 20px;
}
</style>
