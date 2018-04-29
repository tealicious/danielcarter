<template>
  <div class="square" :class="{'focus' : hasFocus}" @click="logMe" v-on-clickaway="removeFocus" @keydown.enter="logMe" tabindex="0">
    <p>{{square.column}}{{square.row}}</p>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
import { eventBus } from "../main";
export default {
  data() {
    return {
      hasFocus: false
    };
  },
  props: ["square"],
  mixins: [clickaway],
  methods: {
    logMe() {
      let squareClicked = {
        column: this.square.column,
        row: this.square.row
      };
      this.hasFocus = true;
      eventBus.$emit("squareLogged", squareClicked);
    },
    removeFocus() {
      this.hasFocus = false;
    }
  }
};
</script>