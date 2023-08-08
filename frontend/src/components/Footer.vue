<template>
  <div class="Footer">
    <div class="bottom-nav">
      <button class="home">
        <img :src="Home" />
        <p>HOME</p>
      </button>
      <button class="fitness">
        <img :src="Fitness" />
        <p>FITNESS</p>
      </button>
      <button class="statistic">
        <img :src="Statistic" />
        <p>STATISTIC</p>
      </button>
      <button class="calendar">
        <img :src="Calendar" />
        <p>CALENDAR</p>
      </button>
    </div>
  </div>
</template>

<script>
import Home from '@/assets/icon/home.png';
import Fitness from '@/assets/icon/fitness.png';
import Statistic from '@/assets/icon/statistic.png';
import Calendar from '@/assets/icon/calendar.png';
export default {
  data() {
    return {
      Home,
      Fitness,
      Statistic,
      Calendar,
    };
  },
  methods: {},
};
</script>

<style scoped>
.Footer {
  position: fixed;
  height: 4rem;
  bottom: 0px;
}
.bottom-nav {
  background: white;
  width: 390px;
  height: 4rem;
  position: absolute;
  display: flex;
  border-radius: 2px;
}
.bottom-nav button {
  flex: 1;
}
.home {
  border: none;
  border-radius: 2px;
  background: linear-gradient(rgb(0, 38, 255, 0.4), rgb(0, 0, 255, 0.1));
  box-shadow: 3px 3px 3px 1px rgba(0, 38, 255, 0.2);
}
.home img {
  width: 28px;
}
.fitness {
  border: none;
  border-radius: 2px;
  background: none;
}
.fitness img {
  width: 28px;
}
.statistic {
  border: none;
  border-radius: 2px;
  background: none;
}
.statistic img {
  width: 28px;
}
.calendar {
  border: none;
  border-radius: 2px;
  background: none;
}
.calendar img {
  width: 28px;
}
.bottom-nav p {
  margin: 0;
  color: black;
  font-weight: 600;
}
</style>
