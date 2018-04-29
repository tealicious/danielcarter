<template>
  <div class="log">
    <div v-for="(click, index) in clicks" :key="click+index">
      <p>click {{click.clickCount}}:</p>
      <p>{{click.column}}{{click.row}}</p>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      clicks: [],
      clickCount: 0
    };
  },
  created() {
    eventBus.$on("squareLogged", data => {
      this.clickCount++;
      data.clickCount = this.clickCount;
      this.clicks.push(data);
      console.log(data.column, data.row, `clicks: ${this.clickCount}`);
    });
  }
};
</script>
<style lang="scss">
.log {
  > div {
    display: flex;
    text-transform: uppercase;
    justify-content: flex-start;
    margin: 2rem 0;
    p {
      margin: 0;
      margin-right: 1rem;
    }
  }
}
</style>