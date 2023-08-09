<template>
  <div class="Footer">
    <div class="bottom-nav">
      <button class="home" id="home" ref="home" @click="click_home">
        <img :src="Home" />
        <p>HOME</p>
      </button>
      <button class="fitness" id="fitness" ref="fitness" @click="click_fitness">
        <img :src="Fitness" />
        <p>FITNESS</p>
      </button>
      <button
        class="statistic"
        id="statistic"
        ref="statistic"
        @click="click_statistic"
      >
        <img :src="Statistic" />
        <p>STATISTIC</p>
      </button>
      <button
        class="calendar"
        id="calendar"
        ref="calendar"
        @click="click_calendar"
      >
        <img :src="Calendar" />
        <p>CALENDAR</p>
      </button>
    </div>
  </div>
</template>

<script>
import Home from "@/assets/icon/home.png";
import Fitness from "@/assets/icon/fitness.png";
import Statistic from "@/assets/icon/statistic.png";
import Calendar from "@/assets/icon/calendar.png";
export default {
  data() {
    return {
      Home,
      Fitness,
      Statistic,
      Calendar,
    };
  },
  methods: {
    click_home() {
      location.href = "#/";
    },
    click_fitness() {
      location.href = "#/fitness";
    },
    click_statistic() {
      location.href = "#/statistic";
    },
    click_calendar() {
      location.href = "#/calendar";
    },
  },
  created() {},
  mounted() {
    const url = window.location.href.split("/");
    const url_href = url[url.length - 1];
    if ("" === url_href) {
      this.$refs.home.style.background =
        "linear-gradient(rgb(0, 38, 255, 0.4), rgb(0, 0, 255, 0.1))";
      this.$refs.home.style.boxShadow = "3px 3px 3px 1px rgba(0, 38, 255, 0.2)";
    } else if ("fitness" === url_href) {
      this.$refs.fitness.style.background =
        "linear-gradient(rgb(0, 38, 255, 0.4), rgb(0, 0, 255, 0.1))";
      this.$refs.fitness.style.boxShadow =
        "3px 3px 3px 1px rgba(0, 38, 255, 0.2)";
    } else if ("statistic" === url_href) {
      this.$refs.statistic.style.background =
        "linear-gradient(rgb(0, 38, 255, 0.4), rgb(0, 0, 255, 0.1))";
      this.$refs.statistic.style.boxShadow =
        "3px 3px 3px 1px rgba(0, 38, 255, 0.2)";
    } else {
      this.$refs.calendar.style.background =
        "linear-gradient(rgb(0, 38, 255, 0.4), rgb(0, 0, 255, 0.1))";
      this.$refs.calendar.style.boxShadow =
        "3px 3px 3px 1px rgba(0, 38, 255, 0.2)";
    }
  },
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
  background: none;
  box-shadow: none;
  cursor: pointer;
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
