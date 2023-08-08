<template>
  <div class="Header">
    <div class="background-box">
      <button class="login-button" @click="click_nav">
        <img :src="login" alt="login" />
      </button>
      <h1>healthy</h1>
    </div>
  </div>
</template>

<script>
import login from '@/assets/icon/login.png';
export default {
  data() {
    return {
      login,
    };
  },
  methods: {
    click_nav() {
      alert('Click login');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap');

.Header {
  width: 390px;
  height: 100px;
  position: absolute;
}
.background-box {
  background: rgb(255, 255, 255);
  width: 390px;
  height: 100px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
}
.background-box h1 {
  /* color: rgb(255, 255, 255); */
  background-image: linear-gradient(
    to right,
    rgb(0, 38, 255),
    rgb(255, 255, 255)
  );
  background-clip: text;
  color: transparent;
  text-align: center;
  font-family: 'Comfortaa', cursive;
  font-size: 28px;
  font-weight: 700;
  padding-top: 15px;
  letter-spacing: -1px;
}
.login-button {
  position: absolute;
  left: 330px;
  top: 35px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: none;
}
.login-button img {
  width: 30px;
  height: 30px;
}
</style>
